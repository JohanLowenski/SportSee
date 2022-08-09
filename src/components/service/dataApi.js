import axios from "axios";
import PropTypes from "prop-types";
import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from "../../info";

/**
 * USED TO COLLECT DATA FROM THE API
 * @function ManageEndpoints
 * @param {string} category: the type of information/data requested
 * @param {string} id of user
 * @returns {string} the real URL/endpoint for the relevant data requested from the API
 */
const ManageEndpoints = (id, category) => {
  switch (category) {
    case "getUserData":
      return `http://localhost:3000/user/${id}/`;

    case "getUserActivity":
      return `http://localhost:3000/user/${id}/activity/`;

    case "getUserAverageSessions":
      return `http://localhost:3000/user/${id}/average-sessions/`;

    case "getUserPerformance":
      return `http://localhost:3000/user/${id}/performance/`;

    default:
      return null;
  }
};

/**
 * USED TO COLLECT 'MOCKED' DATA (in public folder)
 * @function ManageMockedEndpoints
 * @param {string} category: the type of information/data requested
 * @param {string} id of user
 * @returns {string} the path for the'mocked' data requested (held in the public folder)
 */
const ManageMockedEndpoints = (id, category) => {
  const userId = parseInt(id);
  switch (category) {
    case "getUserData":
      return { data: USER_MAIN_DATA.find((data) => data.id === userId) };

    case "getUserActivity":
      return { data: USER_ACTIVITY.find((data) => data.userId === userId) };

    case "getUserAverageSessions":
      return { data: USER_AVERAGE_SESSIONS.find((data) => data.userId === userId) };

    case "getUserPerformance":
      return { data: USER_PERFORMANCE.find((data) => data.userId === userId) };

    default:
      return null;
  }
};

export { ManageEndpoints, ManageMockedEndpoints };

// Proptypes
ManageEndpoints.propTypes = {
  id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

ManageMockedEndpoints.propTypes = {
  id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};
// /**
//  * It's a function that returns a promise that resolves to the data returned from the axios request.
//  * @param id - user id
//  * @returns An object with the following properties:
//  */
export const getUserApiData = (id, category) => {
  return new Promise((resolve, reject) => {
    if (process.env.REACT_APP_IS_MOCKED === "1") {
      resolve(ManageMockedEndpoints(id, category));
    } else {
      axios
        .get(ManageEndpoints(id, category))
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          alert("Une erreur est survenue");
          reject(err);
        });
    }
  });
};
// export const getUserData = (id) => {
//   return new Promise((resolve, reject) => {
//     axios
//       .get(`http://localhost:3000/user/${id}/`)
//       .then((res) => {
//         resolve(res.data);
//       })
//       .catch((err) => {
//         alert("Une erreur est survenue");
//         reject(err);
//       });
//   });
// };
// export const getUserActivity = (id) => {
//   return new Promise((resolve, reject) => {
//     axios
//       .get(`http://localhost:3000/user/${id}/activity/`)
//       .then((res) => {
//         resolve(res.data);
//       })
//       .catch((err) => {
//         alert("Une erreur est survenue");
//         reject(err);
//       });
//   });
// };
// export const getUserAverageSessions = (id) => {
//   return new Promise((resolve, reject) => {
//     axios
//       .get(`http://localhost:3000/user/${id}/average-sessions/`)
//       .then((res) => {
//         resolve(res.data);
//       })
//       .catch((err) => {
//         alert("Une erreur est survenue");
//         reject(err);
//       });
//   });
// };
// export const getUserPerformance = (id) => {
//   return new Promise((resolve, reject) => {
//     axios
//       .get(`http://localhost:3000/user/${id}/performance/`)
//       .then((res) => {
//         resolve(res.data);
//       })
//       .catch((err) => {
//         alert("Une erreur est survenue");
//         reject(err);
//       });
//   });
// };

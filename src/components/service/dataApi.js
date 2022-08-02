import axios from "axios";
import PropTypes from "prop-types";

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
  switch (category) {
    case "getUserData":
      return `../${id}.json`;

    case "getUserActivity":
      return `../${id}/activity.json`;

    case "getUserAverageSessions":
      return `../${id}/average-sessions.json`;

    case "getUserPerformance":
      return `../${id}/performance.json`;

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
    axios
      .get(ManageEndpoints(id, category))
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        alert("Une erreur est survenue");
        reject(err);
      });
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

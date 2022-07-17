import axios from "axios";

/**
 * It's a function that returns a promise that resolves to the data returned from the axios request.
 * @param id - user id
 * @returns An object with the following properties:
 */
export const getUserData = (id) => {
  return new Promise((resolve, reject) => {
    axios
      .get("http://localhost:3000/user/" + id)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
export const getUserActivity = (id) => {
  return new Promise((resolve, reject) => {
    axios
      .get("http://localhost:3000/user/" + id + "/activity")
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
export const getUserAverageSessions = (id) => {
  return new Promise((resolve, reject) => {
    axios
      .get("http://localhost:3000/user/" + id + "/average-sessions")
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
export const getUserPerformance = (id) => {
  return new Promise((resolve, reject) => {
    axios
      .get("http://localhost:3000/user/" + id + "/performance")
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

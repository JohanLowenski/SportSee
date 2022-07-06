import axios from "axios";

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

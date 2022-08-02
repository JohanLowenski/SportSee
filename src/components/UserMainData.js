import React, { useState, useEffect } from "react";
import "./css/user.css";
// import { USER_MAIN_DATA } from "../info";
import { getUserData } from "./service/dataApi";
/**
 * I'm using the useState hook to set the data to null, then I'm using the useEffect hook to get the
 * data from the API and set it to the data state, then I'm returning the data if it's not null.
 */
// const UserMainData = () => {
//   const [data, setData] = useState(USER_MAIN_DATA[0]);
//   useEffect(() => {
//     getUserData(12)
//       .then((res) => {
//         setData(res.data);
//       })
//       .catch((err) => {});
//   }, []);
const UserMainData = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    getUserData(process.env.REACT_APP_USER_ID)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {});
  }, []);
  return (
    <div>
      {data && (
        <h1>
          Bonjour<span>{data.userInfos.firstName}</span>
        </h1>
      )}
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </div>
  );
};

export default UserMainData;

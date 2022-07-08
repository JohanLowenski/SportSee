import React, { useState, useEffect } from "react";
import "./css/user.css";
// import { USER_MAIN_DATA } from "../info";
import { getUserData } from "./service/dataApi";
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

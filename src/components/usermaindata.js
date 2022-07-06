import React, { useState, useEffect } from "react";
import "./css/user.css";
import { USER_MAIN_DATA } from "../info";
import { getUserData } from "./service/dataApi";
const User = (props) => {
  const [data, setData] = useState(USER_MAIN_DATA[0]);
  useEffect(() => {
    getUserData(12)
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <h1>
        Bonjour<span>{data.userInfos.firstName}</span>
      </h1>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </div>
  );
};

export default User;

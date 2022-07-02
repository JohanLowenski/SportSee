import React from "react";
import "./css/user.css";
import { USER_MAIN_DATA } from "../info";

const User = (props) => {
  return (
    <div>
      <h1>
        Bonjour<span>{USER_MAIN_DATA[0].userInfos.firstName}</span>
      </h1>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </div>
  );
};

export default User;

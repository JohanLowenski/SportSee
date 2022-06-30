import React from "react";
import "./css/user.css";

const USER_MAIN_DATA = {
  id: 12,
  userInfos: {
    firstName: "Karl",
    lastName: "Dovineau",
    age: 31,
  },
  todayScore: 0.12,
  keyData: {
    calorieCount: 1930,
    proteinCount: 155,
    carbohydrateCount: 290,
    lipidCount: 50,
  },
};
const User = (props) => {
  return (
    <div>
      <h1>
        Bonjour<span>{USER_MAIN_DATA.userInfos.firstName}</span>
      </h1>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </div>
  );
};

export default User;

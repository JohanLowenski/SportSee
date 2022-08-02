import React from "react";
import Zen from "../assets/zen.png";
import Swim from "../assets/swim.png";
import Bike from "../assets/bike.png";
import Bodybuilding from "../assets/bodybuilding.png";
import "../components/css/homepage.css";

/**
 * This function returns a div that contains a div and a p element.
 * @returns A function that returns a div with a div and a p inside.
 */
function aside() {
  return (
    <div>
      <div className="header__aside-item">
        <img className="header__aside-img" src={Zen} alt="Logo" />
        <img className="header__aside-img" src={Swim} alt="Logo" />
        <img className="header__aside-img" src={Bike} alt="Logo" />
        <img className="header__aside-img" src={Bodybuilding} alt="Logo" />
      </div>
      <p className="header__aside-text">Copyright, SportSee 2022</p>
    </div>
  );
}

export default aside;

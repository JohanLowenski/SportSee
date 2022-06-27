import React from "react";
import "../css/homepage.css";
// import { USER_MAIN_DATA,USER_ACTIVITY,USER_AVERAGE_SESSIONS,USER_PERFORMANCE } from "../../info";
import Logo from "../../assets/logo.png";
import Zen from "../../assets/zen.png";
import Swim from "../../assets/swim.png";
import Bike from "../../assets/bike.png";
import Bodybuilding from "../../assets/bodybuilding.png";
import Alimentation from "../alimentation";
import Activities from "../activities";
import Moyenne from "../moyenne";
import Radar from "../radar";
import Score from "../score";
const Homepage = (props) => {
  return (
    <div className="homepage">
      <div className="header">
        <header className="header__logo">
          <img className="logo" src={Logo} alt="Logo" />
          <ul className="header__nav">
            <li className="header__nav-item">Accueil</li>
            <li className="header__nav-item">Profil</li>
            <li className="header__nav-item">Réglage</li>
            <li className="header__nav-item-end">Communauté</li>
          </ul>
        </header>
      </div>
      <aside className="header__aside">
        <div className="header__aside-item">
          <img className="header__aside-img" src={Zen} alt="Logo" />
          <img className="header__aside-img" src={Swim} alt="Logo" />
          <img className="header__aside-img" src={Bike} alt="Logo" />
          <img className="header__aside-img" src={Bodybuilding} alt="Logo" />
        </div>
        <p className="header__aside-text">Copyright, SportSee 2022</p>
      </aside>
      <section className="homepage__section">
        <div className="homepage__section-item">
          <h1>Bonjour ...</h1>
          <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </div>
        <div className="activities">
          <Activities />
        </div>
        <div className="performance">
          <div className="objective">
            <Moyenne />
          </div>
          <div className="radar">
            <Radar />
          </div>
          <div className="kpi">
            <Score />
          </div>
        </div>
      </section>
      <Alimentation />
    </div>
  );
};

export default Homepage;

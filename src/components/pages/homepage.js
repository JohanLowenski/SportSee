import React from "react";
import "../css/homepage.css";
import Logo from "../../assets/logo.png";
import Zen from "../../assets/zen.png";
import Swim from "../../assets/swim.png";
import Bike from "../../assets/bike.png";
import Bodybuilding from "../../assets/bodybuilding.png";
function Homepage(props) {
  return (
    <div className="homepage">
      <div className="header">
        <header className="header__logo">
          <img className="logo" src={Logo} alt="Logo" />
          <ul className="header__nav">
            <li className="header__nav-item">Accueil</li>
            <li className="header__nav-item">Profil</li>
            <li className="header__nav-item">Réglage</li>
            <li className="header__nav-item">Communauté</li>
          </ul>
        </header>
      </div>
      <aside className="header__aside">
        <img className="header__aside-img" src={Zen} alt="Logo" />
        <img className="header__aside-img" src={Swim} alt="Logo" />
        <img className="header__aside-img" src={Bike} alt="Logo" />
        <img className="header__aside-img" src={Bodybuilding} alt="Logo" />
      </aside>
    </div>
  );
}

export default Homepage;

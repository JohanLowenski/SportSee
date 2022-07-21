import React from "react";
import "../components/css/homepage.css";
import Logo from "../assets/logo.png";
function header(props) {
  return (
    <header className="header__logo">
      <img className="logo" src={Logo} alt="Logo" />
      <ul className="header__nav">
        <li className="header__nav-item">Accueil</li>
        <li className="header__nav-item">Profil</li>
        <li className="header__nav-item">Réglage</li>
        <li className="header__nav-item-end">Communauté</li>
      </ul>
    </header>
  );
}

export default header;

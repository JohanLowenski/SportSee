import React from "react";
import Calories from "../assets/calories-icon.png";
import Protein from "../assets/protein-icon.png";
import Carbohydrate from "../assets/carbs-icon.png";
import Lipid from "../assets/lipids-icon.png";
import "./css/alimentation.css";
const Alimentation = () => {
  return (
    <section className="section_alimentation">
      <div id="calories" className="margin">
        <img className="section_img" src={Calories} alt="Logo" />
      </div>
      <div id="protein" className="margin">
        <img className="section_img" src={Protein} alt="Logo" />
      </div>
      <div id="carbohydrate" className="margin">
        <img className="section_img" src={Carbohydrate} alt="Logo" />
      </div>
      <div id="lipid" className="margin">
        <img className="section_img-end" src={Lipid} alt="Logo" />
      </div>
    </section>
  );
};

export default Alimentation;

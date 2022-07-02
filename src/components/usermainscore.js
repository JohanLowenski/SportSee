// import PropTypes from "prop-types";
import Calories from "../assets/calories-icon.png";
import Protein from "../assets/protein-icon.png";
import Carbohydrate from "../assets/carbs-icon.png";
import Lipid from "../assets/lipids-icon.png";
import "./css/alimentation.css";
import { USER_MAIN_DATA } from "../info";
const Alimentation = () => {
  return (
    <section className="section_alimentation">
      <div id="calories" className="margin">
        <img className="section_img" src={Calories} alt="Logo" />
        <div className="section_text">
          <p className="section_text-number">{(USER_MAIN_DATA[0].keyData.calorieCount / 1000).toFixed(3)}kCal</p>
          <p className="section_text-title">Calories</p>
        </div>
      </div>
      <div id="protein" className="margin">
        <img className="section_img" src={Protein} alt="Logo" />
        <div className="section_text">
          <p className="section_text-number">{USER_MAIN_DATA[0].keyData.proteinCount}g</p>
          <p className="section_text-title">Protéines</p>
        </div>
      </div>
      <div id="carbohydrate" className="margin">
        <img className="section_img" src={Carbohydrate} alt="Logo" />
        <div className="section_text">
          <p className="section_text-number">{USER_MAIN_DATA[0].keyData.carbohydrateCount}g</p>
          <p className="section_text-title">Glucides</p>
        </div>
      </div>
      <div id="lipid" className="margin">
        <img className="section_img-end" src={Lipid} alt="Logo" />
        <div className="section_text">
          <p className="section_text-number">{USER_MAIN_DATA[0].keyData.lipidCount}g</p>
          <p className="section_text-title">Lipides</p>
        </div>
      </div>
    </section>
  );
};

export default Alimentation;

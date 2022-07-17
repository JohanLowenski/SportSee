import Calories from "../assets/calories-icon.png";
import Protein from "../assets/protein-icon.png";
import Carbohydrate from "../assets/carbs-icon.png";
import Lipid from "../assets/lipids-icon.png";
// import { USER_MAIN_DATA } from "../info";
import { getUserData } from "./service/dataApi";
import React, { useEffect, useState } from "react";
import "./css/alimentation.css";

const Cards = (props) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    getUserData(process.env.REACT_APP_USER_ID)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {});
  }, []);
  return (
    <section className="section_alimentation">
      {data && (
        <div className="card_contain">
          <div id="calories" className="margin">
            <img className="section_img" src={Calories} alt="Logo" />
            <div className="section_text">
              <p className="section_text-number">{(data.keyData.calorieCount / 1000).toFixed(3)}kCal</p>
              <p className="section_text-title">Calories</p>
            </div>
          </div>
          <div id="protein" className="margin">
            <img className="section_img" src={Protein} alt="Logo" />
            <div className="section_text">
              <p className="section_text-number">{data.keyData.proteinCount}g</p>
              <p className="section_text-title">Protéines</p>
            </div>
          </div>
          <div id="carbohydrate" className="margin">
            <img className="section_img" src={Carbohydrate} alt="Logo" />
            <div className="section_text">
              <p className="section_text-number">{data.keyData.carbohydrateCount}g</p>
              <p className="section_text-title">Glucides</p>
            </div>
          </div>
          <div id="lipid" className="margin">
            <img className="section_img-end" src={Lipid} alt="Logo" />
            <div className="section_text">
              <p className="section_text-number">{data.keyData.lipidCount}g</p>
              <p className="section_text-title">Lipides</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Cards;

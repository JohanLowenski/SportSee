import Calories from "../assets/calories-icon.png";
import Protein from "../assets/protein-icon.png";
import Carbohydrate from "../assets/carbs-icon.png";
import Lipid from "../assets/lipids-icon.png";
// import { USER_MAIN_DATA } from "../info";
import { getUserData } from "./service/dataApi";
import React, { useEffect, useState } from "react";
import "./css/alimentation.css";

const DataCard = {
  calorieCount: ["Calories", "kCal", Calories],
  proteinCount: ["Protéines", "g", Protein],
  carbohydrateCount: ["Glucides", "g", Carbohydrate],
  lipidCount: ["Lipides", "g", Lipid],
};
const Cards = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    getUserData(process.env.REACT_APP_USER_ID)
      .then((res) => {
        res.data.keyData["calorieCount"] = (res.data.keyData["calorieCount"] / 1000).toFixed(3);
        setData(Object.entries(res.data.keyData));
      })
      .catch((err) => {});
  }, []);
  return (
    <section className="section_alimentation">
      {data && (
        <div className="card_contain">
          {data.map((item, index) => (
            <div key={index} id={item[0].slice(0, -5)} className="margin">
              <img className="section_img" src={DataCard[item[0]][2]} alt={item[0].slice(0, -5)} />
              <div className="section_text">
                <p className="section_text-number">
                  {item[1]}
                  {DataCard[item[0]][1]}
                </p>
                <p className="section_text-title">{DataCard[item[0]][0]}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Cards;

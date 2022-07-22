import Calories from "../assets/calories-icon.png";
import Protein from "../assets/protein-icon.png";
import Carbohydrate from "../assets/carbs-icon.png";
import Lipid from "../assets/lipids-icon.png";
// import { USER_MAIN_DATA } from "../info";
import { getUserData } from "./service/dataApi";
import React, { useEffect, useState } from "react";
import "./css/alimentation.css";

const Cards = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    getUserData(process.env.REACT_APP_USER_ID)
      .then((res) => {
        let keyData = Object.entries(res.keyData);

        keyData.forEach((element) => {
          switch (element[0]) {
            case "calorieCount":
              element.push("Calories");
              element[1] = (element[1] / 1000).toFixed(3);
              break;
            case "proteinCount":
              element.push("Proteines");
              break;
            case "carbohydrateCount":
              element.push("Glucides");
              break;
            case "lipidCount":
              element.push("Lipides");
              break;
            default:
          }
          element[0] === "calorieCount" ? element.push("kCal") : element.push("g");
        });
        setData(keyData);
      })
      .catch((err) => {});
  }, []);
  return (
    <section className="section_alimentation">
      {data && (
        <div className="card_contain">
          {Object.entries(data.keyData).map((item, index) => (
            <div id="calories" className="margin">
              <img className="section_img" src={Calories} alt="calories" />
              <div className="section_text">
                <p className="section_text-number">{(item[1] / 1000).toFixed(3)}kCal</p>
                <p className="section_text-title">{item[0].slice(0, -5)}</p>
                <p>
                  {item[0]},{item[1]},{index},{item[0].slice(0, -5)}
                </p>
              </div>
            </div>
          ))}

          {/* {data && (
          <div id="calories" className="margin">
            <img className="section_img" src={Calories} alt="calories" />
            <div className="section_text">
              <p className="section_text-number">{(data.keyData.calorieCount / 1000).toFixed(3)}kCal</p>
              <p className="section_text-title">Calories</p>
            </div>
          </div>
          <div id="protein" className="margin">
            <img className="section_img" src={Protein} alt="protein" />
            <div className="section_text">
              <p className="section_text-number">{data.keyData.proteinCount}g</p>
              <p className="section_text-title">Protéines</p>
            </div>
          </div>
          <div id="carbohydrate" className="margin">
            <img className="section_img" src={Carbohydrate} alt="carbohydrate" />
            <div className="section_text">
              <p className="section_text-number">{data.keyData.carbohydrateCount}g</p>
              <p className="section_text-title">Glucides</p>
            </div>
          </div>
          <div id="lipid" className="margin">
            <img className="section_img-end" src={Lipid} alt="lipid" />
            <div className="section_text">
              <p className="section_text-number">{data.keyData.lipidCount}g</p>
              <p className="section_text-title">Lipides</p>
            </div>
          </div>
        )} */}
        </div>
      )}
    </section>
  );
};

export default Cards;

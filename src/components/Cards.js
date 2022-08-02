import Calories from "../assets/calories-icon.png";
import Protein from "../assets/protein-icon.png";
import Carbohydrate from "../assets/carbs-icon.png";
import Lipid from "../assets/lipids-icon.png";
import React from "react";
import "./css/alimentation.css";
import PropTypes from "prop-types";

/* A constant that is an object with keys that are the same as the keys in the data object. The values
are arrays that contain the text to be displayed in the card. */
/* It's an object that has keys that are the same as the keys in the data object. The values
are arrays that contain the text to be displayed in the card. */
const DataCard = {
  calorieCount: ["Calories", "kCal", Calories],
  proteinCount: ["Protéines", "g", Protein],
  carbohydrateCount: ["Glucides", "g", Carbohydrate],
  lipidCount: ["Lipides", "g", Lipid],
};
const Cards = (props) => {
  if (!props.data) {
    return <div>Loading...</div>;
  }
  const keyData = Object.entries(props.data.keyData);
  return (
    <section className="section_alimentation">
      {keyData && (
        <div className="card_contain">
          {keyData.map((item, index) => (
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
Cards.propTypes = {
  data: PropTypes.shape({
    keyData: PropTypes.shape({
      calorieCount: PropTypes.number.isRequired,
      carbohydrateCount: PropTypes.number.isRequired,
      lipidCount: PropTypes.number.isRequired,
      proteinCount: PropTypes.number.isRequired,
    }),
  }),
};

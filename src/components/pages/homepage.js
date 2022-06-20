import React from "react";
import "../css/homepage.css";
// import { useParams } from "react-router-dom";
import Logo from "../../assets/logo.png";
import Zen from "../../assets/zen.png";
import Swim from "../../assets/swim.png";
import Bike from "../../assets/bike.png";
import Bodybuilding from "../../assets/bodybuilding.png";
import Calories from "../../assets/calories-icon.png";
import Protein from "../../assets/protein-icon.png";
import Carbohydrate from "../../assets/carbs-icon.png";
import Lipid from "../../assets/lipids-icon.png";
const Homepage = (props) => {
  // const dataModel = {
  //   id: "",
  //   userInfos: {
  //     firstName: "",
  //     lastName: "",
  //     age: "",
  //   },
  //   todayScore: "",
  //   keyData: {
  //     calorieCount: "",
  //     proteinCount: "",
  //     carbohydrateCount: "",
  //     lipidCount: "",
  //   },
  // };
  // /* Fetching the data from the json file. */
  // const params = useParams();
  // const [info, setInfo] = useState(dataModel);
  // useEffect(() => {
  //   fetch("/info.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setInfo(data.find((info) => info.id === params.id));
  //     });
  // }, [params.id]);
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
        <p className="header__aside-text">Copyright, SportSee 2020</p>
      </aside>
      <section className="homepage__section">
        <div className="homepage__section-item">
          <h1 className="homepage__section-title">Bonjour</h1>
        </div>
      </section>
      <section className="section_alimentation">
        <div className="calories">
          <img className="section_img" src={Calories} alt="Logo" />
        </div>
        <div className="protein">
          <img className="section_img" src={Protein} alt="Logo" />
        </div>
        <div className="carbohydrate">
          <img className="section_img" src={Carbohydrate} alt="Logo" />
        </div>
        <div className="lipid">
          <img className="section_img-end" src={Lipid} alt="Logo" />
        </div>
      </section>
    </div>
  );
};

export default Homepage;

import React from "react";
import "../css/homepage.css";
import Alimentation from "../alimentation";
// import { USER_MAIN_DATA,USER_ACTIVITY,USER_AVERAGE_SESSIONS,USER_PERFORMANCE } from "../../info";
import Logo from "../../assets/logo.png";
import Zen from "../../assets/zen.png";
import Swim from "../../assets/swim.png";
import Bike from "../../assets/bike.png";
import Bodybuilding from "../../assets/bodybuilding.png";
import Radar from "../radar";
import Activities from "../activities";
import { ResponsiveContainer, AreaChart, Area } from "recharts";

const Homepage = (props) => {
  const objective = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

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
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                width={200}
                height={60}
                data={objective}
                margin={{
                  top: 5,
                  right: 0,
                  left: 0,
                  bottom: 5,
                }}
              >
                <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div className="radar">
            <Radar />
          </div>
          <div className="kpi"></div>
        </div>
      </section>
      <Alimentation />
    </div>
  );
};

export default Homepage;

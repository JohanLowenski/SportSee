import React from "react";
import "../css/homepage.css";
import Header from "../header";
import Aside from "../aside";
import User from "../usermaindata";
import Activity from "../useractivity";
import Averagesessions from "../useraveragesessions";
import Performance from "../userperformance";
import Score from "../score";
import Mainscore from "../usermainscore";
const Homepage = () => {
  return (
    <div className="homepage">
      <div className="header">
        <Header />
      </div>
      <aside className="header__aside">
        <Aside />
      </aside>
      <section className="homepage__section">
        <div className="homepage__section-item">
          <User />
        </div>
        <div className="activities">
          <Activity />
        </div>
        <div className="performance">
          <div className="objective">
            <Averagesessions />
          </div>
          <div className="radar">
            <Performance />
          </div>
          <div className="kpi">
            <Score />
          </div>
        </div>
      </section>
      <Mainscore />
    </div>
  );
};

export default Homepage;

import React from "react";
import "../css/homepage.css";
import Header from "../header";
import Aside from "../aside";
import UserMainData from "../UserMainData";
import Activity from "../useractivity";
import UserAverageSessions from "../UserAverageSessions";
import UserPerformance from "../UserPerformance";
import Score from "../Score";
import UserMainScore from "../UserMainScore";
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
          <UserMainData />
        </div>
        <div className="activities">
          <Activity />
        </div>
        <div className="performance">
          <div className="objective">
            <UserAverageSessions />
          </div>
          <div className="radar">
            <UserPerformance />
          </div>
          <div className="kpi">
            <Score />
          </div>
        </div>
      </section>
      <UserMainScore />
    </div>
  );
};

export default Homepage;

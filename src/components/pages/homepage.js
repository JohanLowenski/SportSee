import React, { useState, useEffect } from "react";
import "../css/homepage.css";
import Header from "../header";
import Aside from "../aside";
import UserMainData from "../UserMainData";
import Activity from "../useractivity";
import UserAverageSessions from "../UserAverageSessions";
import UserPerformance from "../UserPerformance";
import Score from "../Score";
import Cards from "../Cards";
import PropTypes from "prop-types";
// import { getUserData } from "../service/dataApi";
// import { ManageEndpoints } from "../service/dataApi";
import { getUserApiData } from "../service/dataApi";
// const Homepage = () => {
//   const [data, setData] = useState(null);
//   useEffect(() => {
//     getUserData(process.env.REACT_APP_USER_ID)
//       .then((res) => {
//         setData(res.data);
//       })
//       .catch((err) => {});
//   }, []);
const Homepage = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    getUserApiData(process.env.REACT_APP_USER_ID, "getUserData")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {});
  }, []);
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
          <UserMainData data={data} />
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
      <Cards data={data} />
    </div>
  );
};

export default Homepage;

Homepage.propTypes = {
  data: PropTypes.object,
};

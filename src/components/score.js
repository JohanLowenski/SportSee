import React, { useState, useEffect } from "react";
import { RadialBarChart, RadialBar, ResponsiveContainer, Cell } from "recharts";
import { USER_MAIN_DATA } from "../info";
import { getUserData } from "./service/dataApi";
import PropTypes from "prop-types";
import "./css/score.css";
const Score = () => {
  const [dataScore, setData] = useState(USER_MAIN_DATA[0].todayScore * 100);
  useEffect(() => {
    getUserData(18)
      .then((res) => {
        setData(res.data.todayScore * 100);
      })
      .catch((err) => {});
  }, []);
  const data = [
    { todayScore: dataScore, color: "#FF0000" },
    { todayScore: 100, color: "transparent" },
  ];
  return (
    <div className="scored">
      <div className="all">
        <div className="scoreTitle">Score</div>
        <div className="scoreData">{dataScore}%</div>
        <div className="ofYour">de votre</div>
        <div className="obj">objectif</div>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          cx={120}
          cy={130}
          innerRadius={70}
          outerRadius={90}
          startAngle={90}
          endAngle={360 + 90}
          data={data}
        >
          {/* <text x={10} y={31} fill="#000">
            Score
          </text> */}
          <RadialBar dataKey="todayScore" cornerRadius="50%">
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} cornerRadius="50%" />
            ))}
          </RadialBar>
          {/* <text x="50%" y="50%">
          {dataScore}% de votre
          <br />
          objectif
        </text> */}
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
};
export default Score;

const ScoreProp = {
  dataScore: PropTypes.number,
  setData: PropTypes.func,
  data: PropTypes.array,
};
Score.propTypes = ScoreProp;

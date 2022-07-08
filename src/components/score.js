import React, { useState, useEffect } from "react";
import { RadialBarChart, RadialBar, ResponsiveContainer, Cell } from "recharts";
// import { USER_MAIN_DATA } from "../info";
import { getUserData } from "./service/dataApi";
const Score = () => {
  const [dataScore, setData] = useState(null);
  useEffect(() => {
    getUserData(process.env.REACT_APP_USER_ID)
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
    <>
      {dataScore && (
        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart
            cx={120}
            cy={150}
            innerRadius={70}
            outerRadius={90}
            startAngle={90}
            endAngle={360 + 90}
            data={data}
          >
            <text x={10} y={31} fill="#000">
              Score
            </text>
            <RadialBar dataKey="todayScore" cornerRadius="50%">
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} cornerRadius="50%" />
              ))}
            </RadialBar>
            <text stroke="#282D30" x={105} y={130}>
              {dataScore}%
            </text>
            <text fill="#74798C" x={90} y={150}>
              de votre
            </text>
            <text fill="#74798C" x={90} y={170}>
              objectif
            </text>
          </RadialBarChart>
        </ResponsiveContainer>
      )}
    </>
  );
};
export default Score;

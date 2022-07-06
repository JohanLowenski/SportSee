import React from "react";
// import PropTypes from "prop-types";
// import { RadialBarChart, Pie, Cell, ResponsiveContainer, Text } from "recharts";
import { USER_MAIN_DATA } from "../info";
// const ScoreChart = () => {
//   const { data } = USER_MAIN_DATA[0].id;
//   console.log(USER_MAIN_DATA[0].i);
//   let score = data;
//   const dataScore = [
//     { name: "completed", value: score, fillColor: "#0088FE" },
//     { name: "not-completed", value: 1 - score, color: "transparent" },
//   ];
//   return (
//     <ResponsiveContainer width="100%" height="100%">
//       <RadialBarChart width={160} height={160}>
//         <text x={10} y={31} fill="#000">
//           Score
//         </text>
//         <Pie
//           data={dataScore}
//           cx={120}
//           cy={130}
//           innerRadius={70}
//           outerRadius={80}
//           startAngle={90}
//           endAngle={250}
//           dataKey="value"
//         >
//           {dataScore.map((entry, index) => (
//             <Cell key={`cell-${index}`} fill={entry.color} cornerRadius="50%" />
//           ))}
//         </Pie>
//         <text>{`${100 * score}%`}</text>
//       </RadialBarChart>
//       {/* <text>
//         de votre
//         <br />
//         objectif
//       </text> */}
//     </ResponsiveContainer>
//   );
// };
// export default ScoreChart;
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from "recharts";

const data = [
  {
    name: "18-24",
    uv: 31.47,
    pv: 2400,
    fill: "#8884d8",
  },
  {
    name: "25-29",
    uv: 26.69,
    pv: 4567,
    fill: "#83a6ed",
  },
  {
    name: "30-34",
    uv: 15.69,
    pv: 1398,
    fill: "#8dd1e1",
  },
  {
    name: "35-39",
    uv: 8.22,
    pv: 9800,
    fill: "#82ca9d",
  },
  {
    name: "40-49",
    uv: 8.63,
    pv: 3908,
    fill: "#a4de6c",
  },
  {
    name: "50+",
    uv: 2.63,
    pv: 4800,
    fill: "#d0ed57",
  },
  {
    name: "unknow",
    uv: 6.67,
    pv: 4800,
    fill: "#ffc658",
  },
];

const style = {
  top: "50%",
  right: 0,
  transform: "translate(0, -50%)",
  lineHeight: "24px",
};

export default class Example extends PureComponent {
  static demoUrl = "https://codesandbox.io/s/simple-radial-bar-chart-qf8fz";

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart cx="50%" cy="50%" innerRadius="10%" outerRadius="80%" barSize={10} data={data}>
          <RadialBar
            minAngle={15}
            label={{ position: "insideStart", fill: "#fff" }}
            background
            clockWise
            dataKey="uv"
          />
          <Legend iconSize={10} layout="vertical" verticalAlign="middle" wrapperStyle={style} />
        </RadialBarChart>
      </ResponsiveContainer>
    );
  }
}

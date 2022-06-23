// import PropTypes from "prop-types";
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import "./css/score.css";
import React from "react";

const Score = (props) => {
  const score = [
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
  const AverageSessionsChartContainer = {};
  return (
    <AverageSessionsChartContainer>
      <AverageSessionsChartTitle>
        Durée moyenne des
        <br />
        sessions
      </AverageSessionsChartTitle>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart width={300} height={100} data={score}>
          <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} />
        </LineChart>
        {/* <LineChart data={score} outerRadius="75%" margin={{ top: 0, right: 12, bottom: 24, left: 12 }}>
        <XAxis
          dataKey="day"
          stroke="rgba(255, 255, 255, 0.6)"
          axisLine={false}
          dy={10}
          tickLine={false}
          tick={{
            fontSize: 12,
            fontWeight: 500,
          }}
        />
        <YAxis dataKey="sessionLength" domain={[0, "dataMax + 60"]} hide={true} />
        <Line
          dataKey="sessionLength"
          stroke="rgba(255, 255, 255, 0.6)"
          strokeWidth={2}
          dot={false}
          activeDot={{
            stroke: "rgba(255,255,255, 0.6)",
            strokeWidth: 10,
            r: 5,
          }}
        />
        <Tooltip />
      </LineChart> */}
      </ResponsiveContainer>
    </AverageSessionsChartContainer>
  );
};

export default Score;

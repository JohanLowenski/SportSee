import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
const Activities = (props) => {
  const data = [
    {
      name: 1,
      calories: 4000,
      kilogram: 3400,
      amt: 2400,
    },
    {
      name: 2,
      calories: 3000,
      kilogram: 3898,
      amt: 2210,
    },
    {
      name: 3,
      calories: 4000,
      kilogram: 5100,
      amt: 2290,
    },
    {
      name: 4,
      calories: 2780,
      kilogram: 3908,
      amt: 2000,
    },
    {
      name: 5,
      calories: 1890,
      kilogram: 4800,
      amt: 2181,
    },
    {
      name: 6,
      calories: 2390,
      kilogram: 3800,
      amt: 2500,
    },
    {
      name: 7,
      calories: 3490,
      kilogram: 4300,
      amt: 2100,
    },
    {
      name: 8,
      calories: 3490,
      kilogram: 4300,
      amt: 2100,
    },
    {
      name: 9,
      calories: 3490,
      kilogram: 4300,
      amt: 2100,
    },
    {
      name: 10,
      calories: 3490,
      kilogram: 4300,
      amt: 2100,
    },
  ];
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={data}
        margin={{
          top: 80,
          right: 48,
          left: 20,
          bottom: 5,
        }}
        barGap={8}
      >
        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#dedede" />
        <XAxis
          // dataKey="day"
          dataKey="name"
          dy={5}
          tickLine={false}
          tick={{ fontSize: 14, fontWeight: 500 }}
          padding={{ left: -27, right: -27 }}
        />
        <YAxis
          // yAxisId="kg"
          // dataKey="kilogram"
          domain={["dataMin - 1", "dataMax + 2"]}
          orientation="right"
          stroke="#9B9EAC"
          axisLine={false}
          tickLine={false}
          dx={48}
        />
        <Tooltip />
        <Legend verticalAlign="top" />
        <Bar dataKey="kilogram" fill="#282D30" barSize={7} radius={[50, 50, 0, 0]} />
        <Bar dataKey="calories" fill="#E60000" barSize={7} radius={[50, 50, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Activities;

// import PropTypes from "prop-types";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
// import { USER_ACTIVITY } from "../info";
const Activities = () => {
  const USER_ACTIVITY = [
    {
      day: "2020-07-01",
      kilogram: 70,
      calories: 240,
    },
    {
      day: "2020-07-02",
      kilogram: 69,
      calories: 220,
    },
    {
      day: "2020-07-03",
      kilogram: 70,
      calories: 280,
    },
    {
      day: "2020-07-04",
      kilogram: 70,
      calories: 500,
    },
    {
      day: "2020-07-05",
      kilogram: 69,
      calories: 160,
    },
    {
      day: "2020-07-06",
      kilogram: 69,
      calories: 162,
    },
    {
      day: "2020-07-07",
      kilogram: 69,
      calories: 390,
    },
  ];
  const renderCustomAxisTick = ({ x, y, payload }) => {
    const dayX = payload.index + 1;
    return (
      <text x={x - 5} y={y + 15} fill="#9B9EAC">
        {dayX}
      </text>
    );
  };
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={USER_ACTIVITY}
        margin={{
          top: 80,
          right: 48,
          left: 60,
          bottom: 5,
        }}
        barGap={8}
      >
        <text x={60} y={31} fontSize={15} fontWeight={500}>
          Activité quotidienne
        </text>
        <text className="cal" x={680} y={31} fill="#9B9EAC">
          Calories (kcal)
        </text>
        <text className="kilo" x={500} y={31} fill="#9B9EAC">
          Poids (kg)
        </text>
        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#dedede" />
        <XAxis
          dataKey="day"
          dy={5}
          tickLine={false}
          tick={renderCustomAxisTick}
          padding={{ left: -46, right: -46 }}
          stroke="#9B9EAC"
        />
        <YAxis yAxisId="kg" orientation="right" stroke="#9B9EAC" axisLine={false} tickLine={false} dx={20} />
        <YAxis yAxisId="cal" hide={true} />
        <Tooltip />
        <Legend verticalAlign="top" />
        <Bar yAxisId="kg" dataKey="kilogram" fill="#282D30" barSize={7} radius={[50, 50, 0, 0]} />
        <Bar yAxisId="cal" dataKey="calories" fill="#E60000" barSize={7} radius={[50, 50, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Activities;

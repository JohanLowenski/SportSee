import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Text } from "recharts";
import "./css/useractivity.css";
// import { USER_ACTIVITY } from "../info";
// import {getUserActivity } from "../service/dataApi";
import { getUserApiData } from "./service/dataApi";
/**
 * I'm using react-chartjs-2 to render a bar chart. I'm using a custom tooltip to display the values of
 * the bars. I'm using a custom axis tick to display the date.
 * @returns An array of objects.
 */
// const UserActivity = () => {
//   const [data, setData] = useState(USER_ACTIVITY[0]);
//   useEffect(() => {
//     getUserActivity(12)
//       .then((res) => {
//         setData(res.data);
//       })
//       .catch((err) => {});
//   }, []);
///////////////////////////////////////////////////////////////////////////////////////////
// const UserActivity = () => {
//   const [data, setData] = useState(null);
//   useEffect(() => {
//     getUserActivity(process.env.REACT_APP_USER_ID)
//       .then((res) => {
//         setData(res.data);
//       })
//       .catch((err) => {});
//   }, []);
const UserActivity = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    getUserApiData(process.env.REACT_APP_USER_ID, "getUserActivity")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {});
  }, []);

  const renderCustomAxisTick = ({ x, y, payload }) => {
    const dayX = new Date(payload.value).getDate();
    return (
      <Text x={x - 5} y={y + 15} fill="#9B9EAC">
        {dayX}
      </Text>
    );
  };
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload) {
      return (
        <div className="label" style={{ backgroundColor: "#E60000", color: "#fff", padding: 5, fontSize: 10 }}>
          <p>{`${payload[0].value} kg`}</p>
          <p>{`${payload[1].value} kCal`}</p>
        </div>
      );
    }
    return null;
  };
  return (
    <div className="activities">
      <div className="container">
        <div className="daily-activity">Activité quotidienne</div>
        <div className="activities-container">
          <div className="cal">
            <span></span>Calories brûlées (kCal)
          </div>
          <div className="kilo">
            <span></span>Poids (kg)
          </div>
        </div>
      </div>
      {data && (
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data.sessions}
            margin={{
              top: 60,
              right: 48,
              left: 60,
              bottom: 45,
            }}
            barGap={8}
          >
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
            <Tooltip
              content={<CustomTooltip />}
              cursor={{
                fill: " #C4C4C480",
              }}
            />
            <Bar yAxisId="kg" dataKey="kilogram" fill="#282D30" barSize={7} radius={[50, 50, 0, 0]} />
            <Bar yAxisId="cal" dataKey="calories" fill="#FF0000" barSize={7} radius={[50, 50, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export default UserActivity;

UserActivity.propTypes = {
  data: PropTypes.array,
  ResponsiveContainer: PropTypes.object,
  BarChart: PropTypes.object,
  Bar: PropTypes.object,
  XAxis: PropTypes.object,
  YAxis: PropTypes.object,
  CartesianGrid: PropTypes.object,
  Tooltip: PropTypes.object,
  Text: PropTypes.object,
  renderCustomAxisTick: PropTypes.func,
  CustomTooltip: PropTypes.func,
};

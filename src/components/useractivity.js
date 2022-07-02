// import PropTypes from "prop-types";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Text } from "recharts";
import { USER_ACTIVITY } from "../info";
import "./css/useractivity.css";
const Activities = () => {
  const renderCustomAxisTick = ({ x, y, payload }) => {
    const dayX = payload.index + 1;
    return (
      <Text x={x - 5} y={y + 15} fill="#9B9EAC">
        {dayX}
      </Text>
    );
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
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={USER_ACTIVITY[0].sessions}
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
            width="50%"
            cursor={{
              fill: "rgba(0, 0, 0, 0.1)",
            }}
          />
          <Bar yAxisId="kg" dataKey="kilogram" fill="#282D30" barSize={7} radius={[50, 50, 0, 0]} />
          <Bar yAxisId="cal" dataKey="calories" fill="#FF0000" barSize={7} radius={[50, 50, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Activities;

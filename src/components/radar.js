// import PropTypes from "prop-types";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from "recharts";

const Spider = (props) => {
  const USER_PERFORMANCE = {
    kind: {
      1: "cardio",
      2: "energy",
      3: "endurance",
      4: "strength",
      5: "speed",
      6: "intensity",
    },
    data: [
      {
        value: 80,
        kind: 1,
      },
      {
        value: 120,
        kind: 2,
      },
      {
        value: 140,
        kind: 3,
      },
      {
        value: 50,
        kind: 4,
      },
      {
        value: 200,
        kind: 5,
      },
      {
        value: 90,
        kind: 6,
      },
    ],
  };
  const renderCustomAxisTick = ({ x, y, payload }) => {
    console.log(payload);
    const kind = payload.kind;
    return (
      <text x={x - 5} y={y + 15}>
        {kind}
      </text>
    );
  };
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart cx="50%" cy="50%" outerRadius="60%" data={USER_PERFORMANCE.data}>
        <PolarGrid polarRadius={[10, 20, 40, 60]} radialLines={false} />
        <PolarAngleAxis
          dataKey="kind"
          stroke="#ffffff"
          tickLine={false}
          dy={4}
          tick={renderCustomAxisTick}
          // tick={{ fontSize: 12, fontWeight: 500 }}
        />
        <Radar dataKey="A" fillOpacity={0.7} stroke="transparent" fill="#ff0101" />
      </RadarChart>
    </ResponsiveContainer>
  );
};

export default Spider;

// import PropTypes from "prop-types";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from "recharts";

const Spider = () => {
  const data = [
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
  ];

  const RADIAN = Math.PI / 180;
  const renderCustomAxisTick = ({ cx, cy, payload }) => {
    const radius = 100;
    let x = cx + radius * Math.cos(-payload.coordinate * RADIAN);
    let y = cy + radius * Math.sin(-payload.coordinate * RADIAN);
    /* Adding 10 to the y value of the text. */
    let kind = "";
    switch (payload.value) {
      case 1:
        kind = "Intensité";
        y += 10;
        break;
      case 2:
        kind = "Vitesse";
        y += 10;
        x += 10;
        break;
      case 3:
        kind = "Force";
        y -= 10;
        x += 10;
        break;
      case 4:
        kind = "Endurance";
        y -= 10;
        break;
      case 5:
        kind = "Energie";
        y -= 10;
        break;
      case 6:
        kind = "Cardio";
        y += 10;
        break;
      default:
        break;
    }

    return (
      <text x={x - 25} y={y + 5} fill="#fff" fontSize={12}>
        {kind}
      </text>
    );
  };
  // const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  //   const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  //   const x = cx + radius * Math.cos(-midAngle * RADIAN);
  //   const y = cy + radius * Math.sin(-midAngle * RADIAN);
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart cx="50%" cy="50%" outerRadius="60%" data={data}>
        <PolarGrid polarRadius={[10, 20, 40, 60]} radialLines={false} />
        <PolarAngleAxis
          dataKey="kind"
          stroke="#ffffff"
          tickLine={false}
          dy={4}
          tick={renderCustomAxisTick}

          // tick={{ fontSize: 12, fontWeight: 500 }}
        />
        <Radar dataKey="value" fillOpacity={0.7} stroke="transparent" fill="#ff0101" />
      </RadarChart>
    </ResponsiveContainer>
  );
};

export default Spider;

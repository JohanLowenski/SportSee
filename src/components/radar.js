import PropTypes from "prop-types";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from "recharts";

const Spider = (props) => {
  const radar = [
    {
      subject: "Intensité",
      A: 120,
      B: 110,
      fullMark: 150,
    },
    {
      subject: "Vitesse",
      A: 98,
      B: 130,
      fullMark: 150,
    },
    {
      subject: "Force",
      A: 86,
      B: 130,
      fullMark: 150,
    },
    {
      subject: "Endurance",
      A: 99,
      B: 100,
      fullMark: 150,
    },
    {
      subject: "Energie",
      A: 85,
      B: 90,
      fullMark: 150,
    },
    {
      subject: "Cardio",
      A: 65,
      B: 85,
      fullMark: 150,
    },
  ];
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart cx="50%" cy="50%" outerRadius="60%" data={radar}>
        <PolarGrid polarRadius={[10, 20, 40, 60]} radialLines={false} />
        <PolarAngleAxis
          dataKey="subject"
          stroke="#ffffff"
          tickLine={false}
          dy={4}
          tick={{ fontSize: 12, fontWeight: 500 }}
        />
        <Radar dataKey="A" fillOpacity={0.7} stroke="transparent" fill="#ff0101" />
      </RadarChart>
    </ResponsiveContainer>
  );
};

export default Spider;

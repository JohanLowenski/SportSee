import React, { useEffect, useState } from "react";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from "recharts";
// import { USER_PERFORMANCE } from "../info";
import { getUserPerformance } from "./service/dataApi";
const UserPerformance = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    getUserPerformance(process.env.REACT_APP_USER_ID)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {});
  }, []);
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
  return (
    <>
      {data && (
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="60%" data={data.data}>
            <PolarGrid polarRadius={[10, 20, 40, 60]} radialLines={false} />
            <PolarAngleAxis dataKey="kind" stroke="#ffffff" tickLine={false} dy={4} tick={renderCustomAxisTick} />
            <Radar dataKey="value" fillOpacity={0.7} stroke="transparent" fill="#FF0000" />
          </RadarChart>
        </ResponsiveContainer>
      )}
    </>
  );
};

export default UserPerformance;

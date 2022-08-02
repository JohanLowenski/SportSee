import { Line, LineChart, ReferenceArea, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import "./css/moyenne.css";
import React, { useState, useEffect } from "react";
// import { USER_AVERAGE_SESSIONS } from "../info";
import { getUserAverageSessions } from "./service/dataApi";
/**
 * @returns An array of objects.
 */
// const UserAverageSessions = () => {
//   const [data, setData] = useState(USER_AVERAGE_SESSIONS[0]);
//   useEffect(() => {
//     getUserAverageSessions(12)
//       .then((res) => {
//         setData(res.data);
//       })
//       .catch((err) => {});
//   }, []);
const UserAverageSessions = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    getUserAverageSessions(process.env.REACT_APP_USER_ID)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {});
  }, []);
  const [xAxis, setXAxis] = useState(7);
  const SetPosition = (e) => {
    if (e.activeLabel) {
      setXAxis(e.activeLabel);
    } else {
      setXAxis(7);
    }
  };
  const ResetPosition = (e) => {
    setXAxis(7);
  };
  /**
   * It renders the custom axis tick.
   */
  const renderCustomAxisTick = ({ x, y, payload }) => {
    let textX = "";

    switch (payload.value) {
      case 1:
        textX = "L";
        x += 15;
        break;
      case 2:
        textX = "M";
        break;
      case 3:
        textX = "M";
        break;
      case 4:
        textX = "J";
        break;
      case 5:
        textX = "V";
        break;
      case 6:
        textX = "S";
        x += -5;
        break;
      case 7:
        textX = "D";
        x += -12;
        break;
      default:
        textX = "";
    }
    return (
      <text x={x - 5} y={y + 15} fill="rgba(255,255,255, 0.6)">
        <tspan dy="0em">{textX}</tspan>
      </text>
    );
  };
  /**
   * If the tooltip is active and there is a payload, return a paragraph with the value of the payload
   * @returns The CustomTooltip component is being returned.
   */
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <p
          className="label"
          style={{ backgroundColor: "#fff", padding: 5, fontSize: 10 }}
        >{`${payload[0].value} min`}</p>
      );
    }
    return null;
  };
  return (
    <>
      {data && (
        <ResponsiveContainer>
          <LineChart
            data={data.sessions}
            margin={{ left: 0, right: 0, bottom: 15 }}
            onMouseLeave={ResetPosition}
            onMouseMove={SetPosition}
          >
            <text x="30" y="30" dominantBaseline="middle" fontSize="16" fontWeight="0" fill="rgba(255,255,255, 0.6)">
              Durée moyenne des
            </text>
            <text x="30" y="55" dominantBaseline="middle" fontSize="16" fontWeight="0" fill="rgba(255,255,255, 0.6)">
              sessions
            </text>
            <XAxis
              dataKey="day"
              interval={0}
              tick={renderCustomAxisTick}
              tickLine={false}
              axisLine={false}
              allowDataOverflow={true}
            />
            <YAxis hide domain={[0, "dataMax + 30"]} />
            <Line
              dataKey="sessionLength"
              type="monotone"
              stroke="rgba(255, 255, 255, 0.6)"
              strokeWidth={2}
              dot={false}
              activeDot={{ stroke: "rgba(255, 255, 255, 0.5)", strokeWidth: 10, fill: "#fff", r: 5 }}
            />
            <Tooltip
              content={<CustomTooltip />}
              cursor={{
                stroke: "rgba(255, 0, 0, 0.5)",
                strokeWidth: 0,
              }}
            />
            <ReferenceArea x1={xAxis} x2={7} y1={-20} fill="#000" opacity={0.5} radius={5} ifOverflow="extendDomain" />
          </LineChart>
        </ResponsiveContainer>
      )}
    </>
  );
};

export default UserAverageSessions;

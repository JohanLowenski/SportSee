import React, { PureComponent } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

// const data = [
//   { name: "Completed", value: score, color: "#0088FE" },
//   { name: "In-Progress", value: 100 - score, color: "#00C49F" },
// ];
const data = [{ name: "Completed", value: 400 }];
export default class Example extends PureComponent {
  static demoUrl = "https://codesandbox.io/s/pie-chart-with-padding-angle-7ux0o";

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={160} height={160} onMouseEnter={this.onPieEnter}>
          <text x={10} y={31} fill="#000">
            Score
          </text>
          <Pie
            data={data}
            cx={120}
            cy={130}
            innerRadius={70}
            outerRadius={80}
            fill="#8884d8"
            startAngle={90}
            endAngle={250}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill="#ff0101" cornerRadius="50%" />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    );
  }
}

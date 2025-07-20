import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

import "./Charts.css";

export default function Charts({ title, data, dataKey, grid }) {
  return (
    <div className="chart">
      <h3 className="chartTitle">{title}</h3>
      <ResponsiveContainer width="100%" aspect={4}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#5550bd"></XAxis>
          <Line type="monotone" dataKey={dataKey} stroke="#5550bd"></Line>
          <Tooltip></Tooltip>
          {grid && (
            <CartesianGrid
              stroke="#e0dfdf"
              strokeDasharray="10"
            ></CartesianGrid>
          )}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

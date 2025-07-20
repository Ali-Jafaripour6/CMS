import React from "react";
import Features from "../../components/Features/Features";
import "./Home.css";
import Charts from "../../components/Charts/Charts";
import { xAxisData } from "../../components/chartData";
export default function Home() {
  return (
    <div className="home">
      <Features></Features>
      <Charts grid title="Month Sale" data={xAxisData} dataKey="Sale" />
    </div>
  );
}

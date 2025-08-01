import React from "react";
import "./Home.css";
import Features from "../../components/Features/Features";
import Charts from "../../components/Charts/Charts";
import WidgetsSm from "../../components/WidgetsSm/WidgetsSm";
import { xAxisData } from "../../components/Data";
import WidgetLg from "../../components/WidgetLg/WidgetLg";
export default function Home() {
  return (
    <div className="home">
      <Features></Features>
      <Charts grid title="Month Sale" data={xAxisData} dataKey="Sale" />
      <div className="widgets">
        <WidgetsSm></WidgetsSm>
        <WidgetLg></WidgetLg>
      </div>
    </div>
  );
}

import React from "react";
import "./Features.css";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
export default function Features() {
  return (
    <div className="features">
      <div className="featureItem">
        <span className="featureTitle">Revanue</span>
        <div className="featureContainer">
          <span className="featureMoney">7.325$</span>
          <span className="featureRate">
            -11.4 <ArrowDownwardIcon className="negative"></ArrowDownwardIcon>
          </span>
        </div>
        <span className="featureSub">Compared to The Last Month</span>
      </div>
      <div className="featureItem">
        <span className="featureTitle">Sales</span>
        <div className="featureContainer">
          <span className="featureMoney">11.325$</span>
          <span className="featureRate">
            -11.4 <ArrowDownwardIcon className="negative"></ArrowDownwardIcon>
          </span>
        </div>
        <span className="featureSub">Compared to The Last Month</span>
      </div>
      <div className="featureItem">
        <span className="featureTitle">Costs</span>
        <div className="featureContainer">
          <span className="featureMoney">23.875$</span>
          <span className="featureRate">
            +12.3 <ArrowUpwardIcon className="featureIcon"></ArrowUpwardIcon>
          </span>
        </div>
        <span className="featureSub">Compared to The Last Month</span>
      </div>
    </div>
  );
}

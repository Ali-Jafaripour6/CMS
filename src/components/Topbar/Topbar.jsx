import React from "react";
import "./Topbar.css";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LanguageIcon from "@mui/icons-material/Language";
import SettingsIcon from "@mui/icons-material/Settings";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="leftSide">
          <span className="mainLogo">Main Dashboard</span>
        </div>
        <div className="rightSide">
          <div className="iconContainer">
            <span className="badge">2</span>
            <NotificationsIcon></NotificationsIcon>
          </div>
          <div className="iconContainer">
            <span className="badge">1</span>
            <LanguageIcon></LanguageIcon>
          </div>
          <div className="iconContainer">
            <SettingsIcon></SettingsIcon>
          </div>
          <img className="profilePic" src="./images/user.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}

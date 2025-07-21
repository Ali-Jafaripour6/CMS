import React from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { users } from "../Data";
import "./WidgetsSm.css";
export default function WidgetsSm() {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Joined Members</span>
      <ul className="widgetSmList">
        {users.map((user) => (
          <li key={user.id} className="widgetSMItem">
            <img src={user.img} className="widgetSMIMG" alt="" />
            <div className="widgetSMUser">
              <span className="widgetSMUserName">{user.name}</span>
              <span className="widgetSMUserTitle">{user.title}</span>
            </div>
            <button className="widgetSMButton">
              <VisibilityIcon className="widgetSMIcon"></VisibilityIcon>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

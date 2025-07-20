import React from "react";
import "./Sidebar.css";
import LineStyleIcon from "@mui/icons-material/LineStyle";
import TimelineIcon from "@mui/icons-material/Timeline";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import StorefrontIcon from "@mui/icons-material/Storefront";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import BarChartIcon from "@mui/icons-material/BarChart";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/">
              <li className="sidebarItem active">
                <LineStyleIcon className="listIcon"></LineStyleIcon>
                Home
              </li>
            </Link>
            <li className="sidebarItem">
              <TimelineIcon className="listIcon"></TimelineIcon>
              Analytics
            </li>
            <li className="sidebarItem">
              <TrendingUpIcon className="listIcon"></TrendingUpIcon>
              Sales
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to="/users">
              <li className="sidebarItem active">
                <PermIdentityIcon className="listIcon"></PermIdentityIcon>
                Users
              </li>
            </Link>
            <Link to="/newuser">
              <li className="sidebarItem">
                <StorefrontIcon className="listIcon"></StorefrontIcon>
                New User
              </li>
            </Link>
            <Link to="/products">
              <li className="sidebarItem">
                <AttachMoneyIcon className="listIcon"></AttachMoneyIcon>
                Products
              </li>
            </Link>
            <li className="sidebarItem">
              <BarChartIcon className="listIcon"></BarChartIcon>
              Transactions
            </li>
            <li className="sidebarItem">
              <MailOutlineIcon className="listIcon"></MailOutlineIcon>
              Reports
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarItem active">
              <DynamicFeedIcon className="listIcon"></DynamicFeedIcon>
              Mail
            </li>
            <li className="sidebarItem">
              <ChatBubbleOutlineIcon className="listIcon"></ChatBubbleOutlineIcon>
              Feedbacks
            </li>
            <li className="sidebarItem">
              <WorkOutlineIcon className="listIcon"></WorkOutlineIcon>
              Messages
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

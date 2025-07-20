import React from "react";
import { useRoutes } from "react-router-dom";
import routes from "./components/routes";
import Topbar from "./components/Topbar/Topbar";
import Sidebar from "./components/Sidebar/Sidebar";
import "./App.css";

export default function App() {
  let router = useRoutes(routes);
  return (
    <>
      <Topbar></Topbar>

      <div className="container">
        <Sidebar></Sidebar>
        {router}
      </div>
    </>
  );
}

import React from "react";
import Header from "./Header/Header";
import Aside from "./Aside Nav/Aside";
import { Outlet } from "react-router-dom";
import "../App.css";

const Layout = () => {
  return (
    <>
      <Header />
      <Aside />
      <div className="contentWrapper">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;

import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Fouter from "../../Components/Fouter";
import Navbar1 from "../../Components/Navbar1";
import { Margin } from "./styled";

const MainLayout = () => {
  const location = useLocation();
  return (
    <>
      <Navbar1 />
      {location.pathname === "/" ? "" : <Margin />}
      <Outlet />
      <Fouter />
    </>
  );
};

export default MainLayout;

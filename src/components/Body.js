import React from "react";
import ButtonsList from "./ButtonsList";
import SideBar from "./SideBar";
import MainContainer from "./MainContainer";
import { Outlet } from "react-router-dom";

const Body = ({search}) => {
  return (
    <div className="flex">
      <SideBar />
      <Outlet />
    </div>
  );
};

export default Body;

/* eslint-disable no-unused-vars */
import React from "react";

import LeftsideBar from "../../components/LeftsideBar/LeftsideBar";
import RightSideBar from "../../components/RIghtsideBar/RightSideBar";
import HomeMainbar from "../../components/MainHerosection/HomeMainbar";

const Questions = () => {
  return (
    <div className="home-container-1">
      <LeftsideBar />
      <div className="home-container-2">
        <HomeMainbar />
        <RightSideBar />
      </div>
    </div>
  );
};

export default Questions;

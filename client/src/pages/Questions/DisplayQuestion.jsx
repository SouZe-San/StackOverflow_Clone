/* eslint-disable no-unused-vars */
import React from "react";

import HomeMainbar from "../../components/MainHerosection/HomeMainbar";
import LeftsideBar from "../../components/LeftsideBar/LeftsideBar";
import RightSideBar from "../../components/RIghtsideBar/RightSideBar";
import QuestionDetails from "./QuestionDetails";

const DisplayQuestion = () => {
  return (
    <div className="home-container-1">
      <LeftsideBar />
      <div className="home-container-2">
        <QuestionDetails />
        <RightSideBar />
      </div>
    </div>
  );
};

export default DisplayQuestion;

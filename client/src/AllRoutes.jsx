/* eslint-disable no-unused-vars */
import React from "react";
import { Routes, Route } from "react-router-dom";

// Import component
import Authenticate from "./pages/Auth/Authenticate";
import Home from "./pages/Home/Home";
import AskQuestion from "./pages/AskQuestoin/AskQuestion";
import Questions from "./pages/Questions/Questions";
import DisplayQuestion from "./pages/Questions/DisplayQuestion";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Auth" element={<Authenticate />} />
      <Route path="/AskQuestion" element={<AskQuestion />} />
      <Route path="/Questions" element={<Questions />} />
      <Route path="/Questions/:id" element={<DisplayQuestion />} />
    </Routes>
  );
};

export default AllRoutes;

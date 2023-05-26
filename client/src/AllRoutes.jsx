/* eslint-disable no-unused-vars */
import React from "react";
import { Routes, Route } from "react-router-dom";

import Authenticate from "./pages/Auth/Authenticate";
import Home from "./pages/Home/Home";
import AskQuestion from "./pages/AskQuestoin/AskQuestion";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Auth" element={<Authenticate />} />
      <Route path="/AskQuestion" element={<AskQuestion />} />
    </Routes>
  );
};

export default AllRoutes;

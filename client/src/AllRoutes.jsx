/* eslint-disable no-unused-vars */
import React from "react";
import { Routes, Route } from "react-router-dom";

import Authenticate from "./pages/Auth/Authenticate";
// import Home from "./pages/Home/Home";
const AllRoutes = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<Home />} /> */}
      <Route path="/Auth" element={<Authenticate />} />
    </Routes>
  );
};

export default AllRoutes;

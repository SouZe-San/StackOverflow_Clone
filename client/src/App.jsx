/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";

// Import All Components
import Navbar from "./components/Navbar/Navbar";
import AllRoutes from "./AllRoutes";

import { fetchAllQuestions } from "./actions/question";
// import { fetchAllUsers } from "./actions/users";
function App() {
  const dispatch = useDispatch();
  // this cause, it can call those fun  every time it reload
  useEffect(() => {
    dispatch(fetchAllQuestions());
    // dispatch(fetchAllUsers());
  }, [dispatch]);
  return (
    <>
      <Router>
        <Navbar />
        <AllRoutes />
      </Router>
    </>
  );
}

export default App;

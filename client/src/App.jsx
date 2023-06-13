/* eslint-disable no-unused-vars */
import "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";

// Import All Components
import Navbar from "./components/Navbar/Navbar";
import AllRoutes from "./AllRoutes";
function App() {
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

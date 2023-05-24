/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

// Import style sheet
import "./style.scss";
// ICON links
import logo from "../../assets/logo.png";
import search from "../../assets/search-solid.svg";

const Navbar = () => {
  // Define variables
  // const [user, setUser] = useEffect(null);
  // const [isloged, setIsloged] = useEffect(false);
  const user = null;
  return (
    <nav className="main_nav">
      <div className="navbar">
        <button className="humbugger-icon">
          <i className="ri-menu-fill"></i>
        </button>

        <div className="mid-nav">
          <Link to="/" className="nav-item nav-logo">
            <img src={logo} alt="Overflow" />
          </Link>
          <Link to="/" className="nav-item nav-btn res-nav">
            About
          </Link>
          <Link to="/" className="nav-item nav-btn res-nav">
            Products
          </Link>
          <Link to="/" className="nav-item nav-btn res-nav">
            For Teams
          </Link>

          <form>
            <input type="text" placeholder="Search.." />
            <img src={search} alt="search" width="18" className="search-icon" />
          </form>
        </div>
        <div className="end-nav">
          {user === null ? (
            <Link to="/Auth" className="nav-item nav-links">
              Log in
            </Link>
          ) : (
            <></>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

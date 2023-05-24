/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Avatar from "../Avatar/Avatar";
// Import style sheet
import "./style.scss";
// ICON links
import logo from "../../assets/logo.png";
import search from "../../assets/search-solid.svg";

const Navbar = () => {
  // Define variables
  const [User, setUser] = useState(null);
  // const User = null;
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
          {User === null ? (
            <Link to="/Auth" className="nav-item nav-links">
              Log in
            </Link>
          ) : (
            <>
              <Avatar backgroundColor="#009dff" px="14px" py="6px" borderRadius="50%" color="white">
                <Link
                  to={`/Users/${User?.result?._id}`}
                  style={{ color: "white", textDecoration: "none" }}
                >
                  {User.result.name.charAt(0).toUpperCase()}
                </Link>
              </Avatar>
              <button className="nav-item nav-links">Log out</button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

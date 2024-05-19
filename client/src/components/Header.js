// src/components/Header.js
import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import "../index.css"; // Ensure this import is here

const Header = () => {
  return (
    <React.Fragment>
      <div className="header-wrapper">
        <div className="header">
          <div className="flex items-center justify-center">
            <div className="main-navigation flex items-center justify-center">
              <ul className="menu-items">
                <li className="menu-item">
                  <Link to="/">Home</Link>
                </li>
                <li className="menu-item">
                  <Link to="/about">About</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="nav_shadow"></div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;

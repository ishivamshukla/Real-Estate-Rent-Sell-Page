import React from "react";
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="grow-list">
        <ul className="list">
          <li className="list-item">Rent</li>
          <li className="list-item">Buy</li>
          <li className="list-item">Sell</li>
          <li className="list-item">Manage Property</li>
          <li className="list-item">Resources</li>
        </ul>
      </div>
      <div className="button-group">
        <button className="btn">Login</button>
        <button className="btn">Sign Up</button>
      </div>
    </nav>
  );
}

export default Navbar;

import React from "react";
import { NavLink } from "react-router-dom";

import "./Navbar.scss";

export default function Navbar() {
  return (
    <div className="navbar">
      <NavLink exact to="/" className="navlink">
        Home
      </NavLink>
      <NavLink exact to="/about" className="navlink">
        About
      </NavLink>

      <NavLink exact to="/discover" className="navlink">
        Discover
      </NavLink>
    </div>
  );
}

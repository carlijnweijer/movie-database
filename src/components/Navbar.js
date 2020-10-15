import React from "react";
import { NavLink } from "react-router-dom";

import "./navbar.scss";

export default function Navbar() {
  return (
    <div className="navbar">
      <NavLink exact to="/" className="navlink" activeClassName="active">
        Home
      </NavLink>
      <NavLink exact to="/about" className="navlink" activeClassName="active">
        About
      </NavLink>
      <NavLink
        exact
        to="/discover"
        className="navlink"
        activeClassName="active"
      >
        Discover
      </NavLink>
    </div>
  );
}

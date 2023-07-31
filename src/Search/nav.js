import React from "react";
import "./style.css";
const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <a href="#home">Home</a>
        </li>
        <li className="navbar-item">
          <a href="#movies">List</a>
        </li>
        <button>Sign in</button>
      </ul>
    </nav>
  );
};
export default Navbar;
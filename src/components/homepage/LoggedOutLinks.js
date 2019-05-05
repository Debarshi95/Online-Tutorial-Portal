import React from "react";
import { NavLink } from "react-router-dom";

function LoggedOutLinks() {
  return (
    <div>
      <li className="left">
        <NavLink to="/">ProgramLearners.com</NavLink>
      </li>
      <li className="right register-margin-right">
        <NavLink to="/register">Register</NavLink>
      </li>
      <li className="right">
        <NavLink to="/login">Login</NavLink>
      </li>
      <li className="right">
        <NavLink to="/contactus">Contact Us</NavLink>
      </li>
      <li className="dropdown right">
        <NavLink to="/tutorials" className="dropbtn">
          Tutorials
        </NavLink>
        <div className="dropdown-content">
          <NavLink to="/javascript">JavaScript</NavLink>
          <NavLink to="/c">C Language</NavLink>
          <NavLink to="/html">HTML</NavLink>
          <NavLink to="/css">CSS</NavLink>
          <NavLink to="/php">PHP</NavLink>
          <NavLink to="/java">Java</NavLink>
        </div>
      </li>
    </div>
  );
}
export default LoggedOutLinks;

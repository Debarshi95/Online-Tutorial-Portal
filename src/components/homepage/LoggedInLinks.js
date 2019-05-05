import React from "react";
import { NavLink } from "react-router-dom";

function LoggedInLinks() {
  return (
    <div>
      <li className="right">
        <NavLink to="/abc">Logout</NavLink>
      </li>
      <li className="right">
        <NavLink to="/courses">Courses</NavLink>
      </li>
    </div>
  );
}
export default LoggedInLinks;

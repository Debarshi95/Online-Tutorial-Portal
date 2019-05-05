import React from "react";
import { NavLink } from "react-router-dom";
import "./Homepage.css";

function LoggedOutLinks() {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<NavLink to="/" className="navbar-brand">
				ProgramLearners.com
			</NavLink>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span className="navbar-toggler-icon" />
			</button>
			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<ul className="navbar-nav ml-auto">
					<li className="nav-item">
						<NavLink to="/register" className="nav-link">
							<span className="sr-only">(current)</span>
							Register
						</NavLink>
					</li>
					<li className="nav-item">
						<NavLink to="/login" className="nav-link">
							Login
						</NavLink>
					</li>
					<li className="nav-item">
						<NavLink to="/contactus" className="nav-link">
							Contact Us
						</NavLink>
					</li>
					{/* <li className="li">
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
		  </li> */}
				</ul>
			</div>
		</nav>
	);
}
export default LoggedOutLinks;

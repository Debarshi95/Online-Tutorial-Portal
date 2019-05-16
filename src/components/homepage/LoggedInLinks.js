import React from "react";
import { NavLink } from "react-router-dom";
import "./Homepage.css";

function LoggedInLinks(props) {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark">
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
						<NavLink to="/userdashboard" className="nav-link">
							My Dash
						</NavLink>
					</li>
					<li className="nav-item">
						<NavLink to="/courses" className="nav-link">
							Courses
						</NavLink>
					</li>
					<li className="nav-item">
						<NavLink
							to="/login"
							className="nav-link"
							onClick={props.userLogout}
						>
							Logout
						</NavLink>
					</li>
				</ul>
			</div>
		</nav>
	);
}
export default LoggedInLinks;

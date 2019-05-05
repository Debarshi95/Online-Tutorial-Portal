import React from "react";
import LoggedInLinks from "./LoggedInLinks";
import LoggedOutLinks from "./LoggedOutLinks";

function Nav(props) {
	return props.resState === "USER" ? (
		<LoggedInLinks {...props} />
	) : props.resState === "TUTOR" ? (
		<LoggedInLinks {...props} />
	) : (
		<LoggedOutLinks />
	);
}
export default Nav;

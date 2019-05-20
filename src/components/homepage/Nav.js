import React from "react";
import LoggedInLinks from "./LoggedInLinks";
import LoggedOutLinks from "./LoggedOutLinks";
import { UserProvider, UserConsumer } from "../../UserContext";

function Nav() {
	return (
		<UserConsumer>
			{usercontext =>
				usercontext.state.resState === "USER" ? (
					<LoggedInLinks />
				) : usercontext.state.resState === "TUTOR" ? (
					<LoggedInLinks />
				) : (
					<LoggedOutLinks />
				)
			}
		</UserConsumer>
	);
}
export default Nav;

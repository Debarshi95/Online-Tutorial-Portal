import React from "react";
import LoggedInLinks from "./LoggedInLinks";
import LoggedOutLinks from "./LoggedOutLinks";
import { UserConsumer } from "../../UserContext";

function Nav() {
	return (
		<UserConsumer>
			{usercontext =>
				usercontext.state.userToken ? <LoggedInLinks /> : <LoggedOutLinks />
			}
		</UserConsumer>
	);
}
export default Nav;

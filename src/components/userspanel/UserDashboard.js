import React, { Component } from "react";
import Nav from "../homepage/Nav";
import { UserConsumer } from "../../UserContext";
class UserDashboard extends Component {
	render() {
		return (
			<UserConsumer>
				{usercontext => (
					<div>
						<Nav />
					</div>
				)}
			</UserConsumer>
		);
	}
}

export default UserDashboard;

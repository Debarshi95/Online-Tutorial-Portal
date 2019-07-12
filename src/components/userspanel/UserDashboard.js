import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { UserConsumer } from "../../UserContext";
import UserSidebar from "./UserSidebar";
import UserBoard from "./UserBoard";
class UserDashboard extends Component {
	render() {
		return (
			<UserConsumer>
				{usercontext =>
					!usercontext.state.userToken ? (
						<Redirect to="/login" />
					) : (
						<div>
							<UserSidebar />
							<UserBoard />
						</div>
					)
				}
			</UserConsumer>
		);
	}
}

export default UserDashboard;

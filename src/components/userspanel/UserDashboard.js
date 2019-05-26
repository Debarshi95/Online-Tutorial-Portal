import React, { Component } from "react";
import Nav from "../homepage/Nav";
import { UserConsumer } from "../../UserContext";
import UserSidebar from './UserSidebar'; 
import UserBoard from './UserBoard';
class UserDashboard extends Component {
	render() {
		return (
			<UserConsumer>
				{usercontext => (
					<div>
						<Nav />
						<UserSidebar/>
						<UserBoard />
					</div>
				)}
			</UserConsumer>
		);
	}
}

export default UserDashboard;

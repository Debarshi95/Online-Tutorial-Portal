import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "./AdminPanel.css";
import AdminLOG from "./AdminLOG";
import { AdminConsumer } from "../../AdminContext";
class Login extends Component {
	render() {
		return (
			<AdminConsumer>
				{admincontext =>
					admincontext.state.isAdminLoggedIn ? (
						<Redirect to="/admindashboard" />
					) : (
						<AdminLOG />
					)
				}
			</AdminConsumer>
		);
	}
}

export default Login;

import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "./auth.css";
import LOG from "./LOG";
import { UserConsumer } from "../../UserContext";

class Login extends Component {
	render() {
		return (
			<UserConsumer>
				{usercontext =>
					usercontext.state.resState ? (
						<Redirect to="/userdashboard" />
					) : usercontext.state.resState === "TUTOR" ? (
						<Redirect to="/tutordashboard" />
					) : (
						<LOG />
					)
				// {console.log(usercontext.state)}
				}
			</UserConsumer>
		);
	}
}
export default Login;

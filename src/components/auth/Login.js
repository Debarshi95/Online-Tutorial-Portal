import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import TutorDashboard from "../tutorspanel/TutorDashboard";
import UserDashboard from "../userspanel/UserDashboard";

import "./auth.css";
import LOG from "./LOG";

class Login extends Component {
	render() {
		return this.props.resState === "USER" ? (
			<Redirect to="/userdashboard" />
		) : this.props.resState === "TUTOR" ? (
			<Redirect to="/tutordashboard" />
		) : (
			<LOG {...this.props} />
		);
	}
}
export default Login;

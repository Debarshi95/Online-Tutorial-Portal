import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "./Adminpanel.css";
import axios from "axios";

import AdminLOG from "./AdminLOG";
class Login extends Component {
	constructor() {
		super();
		this.state = {
			user: "",
			pass: "",
			isAdminLoggedIn: false

			// courses: []
		};
	}
	handleChange = e => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	handleAdminLogin = e => {
		e.preventDefault();
		console.log(this.state);

		const user = this.state.user;
		const pass = this.state.pass;
		axios
			.get(`http://localhost/reactphp/adminauth.php?user=${user}&pass=${pass}`)
			.then(res => {
				console.log(res.data);
				const AdminState = `${pass}` === res.data.Pass;
				this.setState(
					{
						isAdminLoggedIn: AdminState ? true : false
					},
					() => {
						console.log(this.state);
					}
				);
			})
			.catch(err => console.log(err));
	};

	render() {
		return this.state.isAdminLoggedIn ? (
			<Redirect to="/admindashboard" />
		) : (
			<AdminLOG
				user={this.state.user}
				pass={this.state.pass}
				handleChange={this.handleChange}
				handleAdminLogin={this.handleAdminLogin}
			/>
		);
	}
}

export default Login;

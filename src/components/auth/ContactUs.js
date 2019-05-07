import React, { Component } from "react";
import Nav from "../homepage/Nav";
import "./auth.css";
class ContactUs extends Component {
	constructor(props) {
		super(props);

		this.state = {
			username: "",
			password: "",
			isUserChecked: "",
			isTutorChecked: ""
		};
	}
	handleContactChange = e => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	handleContactSubmit = e => {
		e.preventDefault();
		console.log(this.state);
	};

	render() {
		return (
			<div className="contact-card">
				<form onSubmit={this.handleContactSubmit}>
					<div className="form-group">
						<label htmlFor="username">Username</label>
						<input
							type="text"
							className="form-control"
							name="username"
							value={this.state.username}
							placeholder="Enter username"
							onChange={this.handleContactChange}
							required
						/>
					</div>
					<div className="form-group">
						<label htmlFor="password">Password</label>
						<input
							type="passw"
							className="form-control"
							name="password"
							value={this.state.password}
							placeholder="Enter password"
							onChange={this.handleContactChange}
							required
						/>
					</div>
					<div className="custom-control custom-switch">
						<input
							type="checkbox"
							className="custom-control-input"
							id="customSwitch1"
							name="isUserChecked"
							value="user"
							onChange={this.handleContactChange}
						/>
						<label className="custom-control-label" htmlFor="customSwitch1">
							Student
						</label>
					</div>
					<div className="custom-control custom-switch">
						<input
							type="checkbox"
							className="custom-control-input"
							id="customSwitch2"
							name="isTutorChecked"
							value="tutor"
							onChange={this.handleContactChange}
						/>
						<label className="custom-control-label" htmlFor="customSwitch2">
							Tutor
						</label>
					</div>
					<div className="form-group">
						<button type="login" className="btn btn-primary">
							login
						</button>
					</div>
				</form>
			</div>
		);
	}
}
export default ContactUs;

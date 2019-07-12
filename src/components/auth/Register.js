import React, { Component } from "react";
import "./auth.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";

class Register extends Component {
	constructor(props) {
		super(props);

		this.state = {
			firstname: "",
			lastname: "",
			username: "",
			email: "",
			password: "",
			password2: "",
			isUserChecked: "",
			isTutorChecked: ""
		};
	}

	handleChange = e => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};
	check = e => {
		this.setState({
			[e.target.name]: e.target.checked
		});
	};
	handleRegister = e => {
		e.preventDefault();

		if (this.state.isUserChecked && !this.state.isTutorChecked) {
			axios({
				url:
					"http://localhost/rest-api-authentication-example/api/create_user.php",
				method: "post",
				data: this.state,
				config: {
					headers: { "Content-Type": "application/json" }
				}
			})
				.then(res => {
					console.log(res);
					console.log(res.data);
				})
				.catch(err => console.log(err));
		} else if (this.state.isTutorChecked && !this.state.isUserChecked) {
			axios({
				url:
					"http://localhost/rest-api-authentication-example/api/create_tutor.php",
				method: "post",
				data: this.state,
				config: {
					headers: { "Content-Type": "application/json" }
				}
			})
				.then(res => {
					console.log(res);
					console.log(res.data);
				})
				.catch(err => console.log(err));
		}
		console.log(this.state);
	};
	render() {
		return (
			// Wrapper Div starts

			<div className="register-body">
				{/* =====================================Main card starts======================================= */}
				<div className="register-card">
					<h3 className="register-card-title">Join us</h3>
					{/* ============================Form starts============================== */}
					<form onSubmit={this.handleRegister}>
						{/* ===================Div for firstname starts=============== */}
						<div className="input-group mb-3 move-top">
							<div className="input-group-prepend">
								<span className="input-group-text">
									<FontAwesomeIcon icon="user" id="user" />
								</span>
							</div>
							<input
								type="text"
								className="form-control"
								name="firstname"
								value={this.state.firstname}
								placeholder="Firstname"
								onChange={this.handleChange}
								aria-describedby="user"
								required
							/>
						</div>
						{/* ===================Div for firstname ends=============== */}

						{/* ===================Div for Lastname starts=============== */}
						<div className="input-group mb-3">
							<div className="input-group-prepend">
								<span className="input-group-text">
									<FontAwesomeIcon icon="user" id="user" />
								</span>
							</div>
							<input
								type="text"
								className="form-control"
								name="lastname"
								value={this.state.lastname}
								placeholder="Lastname"
								onChange={this.handleChange}
								required
							/>
						</div>
						{/* ===================Div for Lastname ends=============== */}

						{/* ===================Div for Username starts=============== */}
						<div className="input-group mb-3">
							<div className="input-group-prepend">
								<span className="input-group-text">
									<FontAwesomeIcon icon="user" id="user" />
								</span>
							</div>
							<input
								type="text"
								className="form-control"
								name="username"
								value={this.state.username}
								placeholder="Username"
								onChange={this.handleChange}
								required
							/>
						</div>
						{/* ===================Div for Username ends=============== */}

						{/* ===================Div for Email starts=============== */}
						<div className="input-group mb-3">
							<div className="input-group-prepend">
								<span className="input-group-text">
									<FontAwesomeIcon icon="at" id="at" />
								</span>
							</div>
							<input
								type="email"
								className="form-control"
								name="email"
								value={this.state.email}
								placeholder="Email"
								onChange={this.handleChange}
								aria-describedby="at"
								required
							/>
						</div>
						{/* ===================Div for Email ends=============== */}

						{/* ===================Div for Passowrd1 starts=============== */}
						<div className="input-group mb-3">
							<div className="input-group-prepend">
								<span className="input-group-text">
									<FontAwesomeIcon icon="key" id="key" />
								</span>
							</div>
							<input
								type="passw"
								className="form-control"
								name="password"
								value={this.state.password}
								placeholder="Password"
								onChange={this.handleChange}
								aria-describedby="key"
								required
							/>
						</div>
						{/* ===================Div for Password1 ends=============== */}

						{/* ===================Div for Password2 starts=============== */}
						<div className="input-group mb-3">
							<div className="input-group-prepend">
								<span className="input-group-text">
									<FontAwesomeIcon icon="key" id="key" />
								</span>
							</div>
							<input
								type="passw"
								className="form-control"
								name="password2"
								value={this.state.password2}
								placeholder="Re-enter password"
								onChange={this.handleChange}
								aria-describedby="key"
								required
							/>
						</div>
						{/* ===================Div for Passowrd2 ends=============== */}

						{/* ===================Div for Switch starts=============== */}

						<div className="custom-control custom-switch">
							<input
								type="checkbox"
								className="custom-control-input"
								id="customSwitch1"
								name="isUserChecked"
								value={this.state.isUserChecked}
								onChange={this.check}
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
								value={this.state.isTutorChecked}
								onChange={this.check}
							/>
							<label className="custom-control-label" htmlFor="customSwitch2">
								Tutor
							</label>
						</div>
						{/* ===================Div for Switch ends=============== */}

						{/* =====================Div for button================== */}
						<div className="form-group">
							<button
								type="login"
								className="btn btn-block btn-primary register-btn"
								data-toggle="modal"
								data-target="#exampleModalCenter"
							>
								Register
							</button>
						</div>

						{/* ====================Div for button ends============== */}
					</form>
					{/* ====================================Form ends================================== */}
				</div>
				{/* =======================================Main card ends=================================== */}
			</div>

			//Wrapper Div ends
		);
	}
}
export default Register;

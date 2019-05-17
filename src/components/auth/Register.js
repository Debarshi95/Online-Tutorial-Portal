import React, { Component, Fragment } from "react";
import "./auth.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Nav from "../homepage/Nav";
import { RegisterConsumer } from "../../RegisterContext";

class Register extends Component {
	render() {
		return (
			// Wrapper Div starts
			<RegisterConsumer>
				{registercontext => (
					<Fragment>
						<Nav />
						<div className="register-body">
							{/* =====================================Main card starts======================================= */}
							<div className="register-card">
								<h3 className="register-card-title">Join us</h3>
								{/* ============================Form starts============================== */}
								<form onSubmit={registercontext.handleRegister}>
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
											value={registercontext.state.firstname}
											placeholder="Firstname"
											onChange={registercontext.handleChange}
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
											value={registercontext.state.lastname}
											placeholder="Lastname"
											onChange={registercontext.handleChange}
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
											name="user"
											value={registercontext.state.user}
											placeholder="Username"
											onChange={registercontext.handleChange}
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
											value={registercontext.state.email}
											placeholder="Email"
											onChange={registercontext.handleChange}
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
											name="pass"
											value={registercontext.state.pass}
											placeholder="Password"
											onChange={registercontext.handleChange}
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
											name="pass2"
											value={registercontext.state.pass2}
											placeholder="Re-enter password"
											onChange={registercontext.handleChange}
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
											value={registercontext.state.isUserChecked}
											onChange={registercontext.check}
										/>
										<label
											className="custom-control-label"
											htmlFor="customSwitch1"
										>
											Student
										</label>
									</div>
									<div className="custom-control custom-switch">
										<input
											type="checkbox"
											className="custom-control-input"
											id="customSwitch2"
											name="isTutorChecked"
											value={registercontext.state.isTutorChecked}
											onChange={registercontext.check}
										/>
										<label
											className="custom-control-label"
											htmlFor="customSwitch2"
										>
											Tutor
										</label>
									</div>
									{/* ===================Div for Switch ends=============== */}

									{/* =====================Div for button================== */}
									<div className="form-group">
										<button
											type="login"
											className="btn btn-block btn-primary register-btn"
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
					</Fragment>
				)}
			</RegisterConsumer>
			//Wrapper Div ends
		);
	}
}
export default Register;

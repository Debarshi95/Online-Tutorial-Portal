import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function LOG(props) {
	return (
		<div className="login-body">
			<div className="card login-card">
				<h4 className="login-card-title">Welcome back!</h4>
				<form onSubmit={props.userLogin}>
					<div className="move-top">
						<label htmlFor="username">Username</label>
						<div className="input-group mb-3">
							<div className="input-group-prepend">
								<span className="input-group-text custom-icon">
									<FontAwesomeIcon icon="user" id="user" />
								</span>
							</div>
							<input
								type="text"
								className="form-control"
								name="username"
								value={props.username}
								placeholder="Enter username"
								onChange={props.handleChange}
								aria-describedby="user"
								required
							/>
						</div>
					</div>
					<div>
						<label htmlFor="password">Password</label>
						<div className="input-group mb-3">
							<div className="input-group-prepend">
								<span className="input-group-text">
									<FontAwesomeIcon icon="key" id="key" />
								</span>
							</div>

							<input
								type="passw"
								className="form-control"
								name="userpass"
								value={props.userpass}
								placeholder="Enter password"
								onChange={props.handleChange}
								aria-describedby="key"
								required
							/>
						</div>
					</div>
					<div className="custom-control custom-switch">
						<input
							type="checkbox"
							className="custom-control-input"
							id="customSwitch1"
							name="isUserChecked"
							value={props.isUserChecked}
							onChange={props.check}
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
							value={props.isTutorChecked}
							onChange={props.check}
						/>
						<label className="custom-control-label" htmlFor="customSwitch2">
							Tutor
						</label>
					</div>
					<div className="form-group">
						<button
							type="login"
							className="btn btn-block btn-primary login-btn"
						>
							login
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default LOG;

import React from "react";
import { Link } from "react-router-dom";

function LOG(props) {
	return (
		<div className="card">
			<div className="card-body">
				<h4 className="card-title">Member Login</h4>
				<form onSubmit={props.userLogin} novalidate>
					<div className="form-group">
						<label for="username">Username</label>
						<input
							type="text"
							className="form-control"
							name="username"
							value={props.username}
							placeholder="Enter username"
							onChange={props.handleChange}
							required
						/>
					</div>
					<div className="form-group">
						<label for="password">Password</label>
						<input
							type="passw"
							className="form-control"
							name="userpass"
							value={props.userpass}
							placeholder="Enter password"
							onChange={props.handleChange}
							required
						/>
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
						<label className="custom-control-label" for="customSwitch1">
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
						<label className="custom-control-label" for="customSwitch2">
							Tutor
						</label>
					</div>
					<div className="form-group">
						<button type="login" className="btn btn-outline-primary">
							login
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default LOG;

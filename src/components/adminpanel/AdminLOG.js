import React from "react";

function AdminLOG(props) {
	return (
		<div className="admin-login-body">
			<div className="admin-login-card">
				<h1>ADMIN LOGIN</h1>
				<br />
				<form onSubmit={props.handleAdminSubmit}>
					<input
						type="text"
						name="user"
						placeholder="Username"
						value={props.user}
						onChange={props.handleChange}
						required
					/>
					<input
						type="password"
						name="pass"
						placeholder="Password"
						value={props.pass}
						onChange={props.handleChange}
						required
					/>
					<input
						type="submit"
						name="login"
						className="admin-login admin-login-submit"
						value="LOGIN"
					/>
				</form>
			</div>
		</div>
	);
}
export default AdminLOG;

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AdminConsumer } from "../../AdminContext";

function AdminLOG() {
	return (
		<AdminConsumer>
			{admincontext => (
				<div className="admin-login-body">
					<div className="card admin-login-card">
						<h1>Hey, Admin!!!</h1>
						<form onSubmit={admincontext.handleAdminLogin}>
							<div className="input-group mb-3 top-margin">
								<div className="input-group-prepend">
									<span className="input-group-text">
										<FontAwesomeIcon icon="user" id="user" />
									</span>
								</div>
								<input
									type="text"
									name="user"
									placeholder="Username"
									className="form-control"
									value={admincontext.state.user}
									onChange={admincontext.handleChange}
									aria-describedby="user"
									required
								/>
							</div>
							<div className="input-group mb-3">
								<div className="input-group-prepend">
									<span className="input-group-text">
										<FontAwesomeIcon icon="key" id="key" />
									</span>
								</div>
								<input
									type="password"
									name="pass"
									placeholder="Password"
									className="form-control"
									value={admincontext.state.pass}
									onChange={admincontext.handleChange}
									aria-describedby="key"
									required
								/>
							</div>
							<input
								type="submit"
								name="login"
								className="btn btn-primary btn-block admin-login-btn"
								value="LOGIN"
							/>
						</form>
					</div>
				</div>
			)}
		</AdminConsumer>
	);
}
export default AdminLOG;

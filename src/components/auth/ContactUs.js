import React, { Component } from "react";
import "./auth.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Nav from "../homepage/Nav";

class ContactUs extends Component {
	constructor(props) {
		super(props);

		this.state = {
			username: "",
			email: "",
			isUserChecked: "",
			isTutorChecked: "",
			message: ""
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
			<div>
				<Nav />
				<div className="contact-body">
					<div className="contact-card">
						<h3 className="contact-title">Contact Us</h3>
						<form onSubmit={this.handleContactSubmit}>
							<div className="input-group mb-3 move-top">
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
									onChange={this.handleContactChange}
									aria-describedby="user"
									required
								/>
							</div>
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
									onChange={this.handleContactChange}
									aria-describedby="at"
									required
								/>
							</div>
							<div className="input-group mb-3">
								<div className="input-group-prepend">
									<span className="input-group-text">
										<FontAwesomeIcon icon="envelope" id="envelope" />
									</span>
								</div>
								<textarea
									className="form-control textarea"
									value={this.state.message}
									onChange={this.handleContactChange}
									name="message"
									placeholder="Your message..."
									aria-describedby="envelope"
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
								<button
									type="button"
									className="btn btn-block btn-primary contact-btn"
									data-toggle="modal"
									data-target="#exampleModalCenter"
								>
									send
								</button>

								<div
									class="modal fade"
									id="exampleModalCenter"
									tabindex="-1"
									role="dialog"
									aria-labelledby="exampleModalCenterTitle"
									aria-hidden="true"
								>
									<div
										class="modal-dialog modal-dialog-centered"
										role="document"
									>
										<div class="modal-content">
											<div class="modal-header">
												<h5 class="modal-title" id="exampleModalCenterTitle">
													Thankyou!!!
												</h5>
												<button
													type="button"
													class="close"
													data-dismiss="modal"
													aria-label="Close"
												>
													<span aria-hidden="true">&times;</span>
												</button>
											</div>
											<div class="modal-body">
												Your message has been Submitted. We'll look into it
											</div>
											<div class="modal-footer">
												<button
													type="button"
													class="btn btn-secondary"
													data-dismiss="modal"
												>
													Close
												</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		);
	}
}
export default ContactUs;

import React, { Component } from "react";
import Nav from "../homepage/Nav";
import "./auth.css";
class ContactUs extends Component {
	render() {
		return (
			<div>
				<div className="contact-body">
					<form className="contact-card">
						<input type="text" name="username" placeholder="Username" />
						<input type="email" name="email" placeholder="Email" />
						<textarea name="message" placeholder="Type your message here">
							Your Message
						</textarea>
					</form>
				</div>
			</div>
		);
	}
}
export default ContactUs;

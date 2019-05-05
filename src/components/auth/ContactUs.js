import React, { Component } from "react";
import Nav from "../homepage/Nav";
import "./ContactUs.css";
class ContactUs extends Component {
  render() {
    return (
      <div>
        <Nav />
        <div className="form-body">
          <form className="form-card">
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

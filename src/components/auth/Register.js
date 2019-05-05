import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Register.css";
import Nav from "../homepage/Nav";
import axios from "axios";
class Register extends Component {
  constructor() {
    super();
    this.state = {
      firstname: "",
      lastname: "",
      user: "",
      email: "",
      pass: "",
      pass2: "",
      login: ""
    };
  }
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleRegisterSubmit = e => {
    e.preventDefault();

    const firstname = this.state.firstname;
    const lastname = this.state.lastname;
    const user = this.state.user;
    const email = this.state.email;
    const pass = this.state.pass;
    const pass2 = this.state.pass2;
    const login = this.state.login;
    axios
      .get(
        `http://localhost/reactphp/register.php?firstname=${firstname}&lastname=${lastname}&user=${user}&email=${email}&pass=${pass}&pass2=${pass2}&login=${login}`
      )
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
      .catch(err => console.log(err));
  };
  render() {
    return (
      <div className="register-body">
        <Nav />
        <div className="register-card">
          <h1>Join us</h1>
          <br />
          <form onSubmit={this.handleRegisterSubmit}>
            <input
              type="text"
              id="firstname"
              placeholder="Firstname"
              value={this.state.firstname}
              onChange={this.handleChange}
              required
            />
            <input
              type="text"
              id="lastname"
              placeholder="Lastname"
              value={this.state.lastname}
              onChange={this.handleChange}
              required
            />
            <input
              type="text"
              id="user"
              placeholder="Username"
              value={this.state.user}
              onChange={this.handleChange}
              required
            />
            <input
              type="email"
              id="email"
              placeholder="Email"
              value={this.state.email}
              onChange={this.handleChange}
              required
            />
            <input
              type="password"
              id="pass"
              placeholder="Password"
              value={this.state.pass}
              onChange={this.handleChange}
              required
            />
            <input
              type="password"
              id="pass2"
              placeholder="Re-enter Password"
              value={this.state.pass2}
              onChange={this.handleChange}
              required
            />
            Join as:
            <div className="radio-btn">
              Student:
              <input
                type="radio"
                id="login"
                value="Student"
                onChange={this.handleChange}
                required
              />
              Teacher:
              <input
                type="radio"
                id="login"
                value="Teacher"
                onChange={this.handleChange}
                required
              />
            </div>
            <input
              type="submit"
              className="register-button register-button-submit"
              name="register"
              value="Register"
            />
          </form>
          <div className="register-help">
            <h4>Already registered?</h4>
            <Link to="/login">Login</Link>
          </div>
        </div>
      </div>
    );
  }
}
export default Register;

import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import axios from "axios";
import Nav from "../homepage/Nav";
import UserDashboard from "../userspanel/UserDashboard";
class Login extends Component {
  constructor() {
    super();
    this.state = {
      user: "",
      pass: "",
      isloggedIn: false
      // courses: []
    };
  }
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleLoginSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    const user = this.state.user;
    const pass = this.state.pass;
    axios
      .get(`http://localhost/reactphp/login.php?user=${user}&pass=${pass}`)
      .then(res => {
        console.log(res);
        const LoggedInState = `${pass}` === res.data.Pass;
        console.log(LoggedInState);
        this.setState({
          isloggedIn: LoggedInState ? true : false
        });
        console.log(this.state);
      })
      .catch(err => console.log(err));
  };

  render() {
    return this.state.isloggedIn ? (
      <UserDashboard />
    ) : (
      <div className="login-body">
        <Nav />
        <div className="login-card">
          <h1>Member Login</h1>
          <br />
          <form onSubmit={this.handleLoginSubmit}>
            <input
              type="text"
              name="user"
              placeholder="Username"
              onChange={this.handleChange}
            />
            <input
              type="password"
              name="pass"
              placeholder="Password"
              onChange={this.handleChange}
            />
            <input
              type="submit"
              name="login"
              className="login login-submit"
              value="login"
            />
          </form>

          <div className="login-help">
            <Link to="/register">Register</Link> •{" "}
            <Link to="/forgotpassword">Forgot Password</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;

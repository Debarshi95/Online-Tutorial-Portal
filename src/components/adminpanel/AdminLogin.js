import React, { Component } from "react";
import "./AdminPanel.css";
import axios from "axios";
import Nav from "../homepage/Nav";
import AdminDashboard from "./AdminDashboard";
class Login extends Component {
  constructor() {
    super();
    this.state = {
      user: "",
      pass: "",
      isAdminLoggedIn: false

      // courses: []
    };
  }
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleAdminSubmit = e => {
    e.preventDefault();
    console.log(this.state);

    const user = this.state.user;
    const pass = this.state.pass;
    axios
      .get(`http://localhost/reactphp/adminauth.php?user=${user}&pass=${pass}`)
      .then(res => {
        console.log(res.data);
        const AdminState = `${pass}` === res.data.pass;
        this.setState({
          isAdminLoggedIn: AdminState ? true : false
        });
      })
      .catch(err => console.log(err));
  };

  render() {
    return this.state.isAdminLoggedIn ? (
      <AdminDashboard />
    ) : (
      <div className="admin-login-body">
        <Nav />
        <div className="admin-login-card">
          <h1>ADMIN LOGIN</h1>
          <br />
          <form onSubmit={this.handleAdminSubmit}>
            <input
              type="text"
              name="user"
              placeholder="Username"
              onChange={this.handleChange}
              required
            />
            <input
              type="password"
              name="pass"
              placeholder="Password"
              onChange={this.handleChange}
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
}

export default Login;

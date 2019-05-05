import React, { Component } from "react";
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect
} from "react-router-dom";
import axios from "axios";
import Homepage from "./components/homepage/Homepage";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import "./App.css";
import Tutorials from "./components/tutorialspage/Tutorials";
import ContactUs from "./components/auth/ContactUs";
import About from "./components/homepage/About";
import CLanguage from "./components/tutorialspage/cLangaugeFiles/CLanguage";
import JavaScript from "./components/tutorialspage/javascriptFiles/JavaScript";
import AdminLogin from "./components/adminpanel/AdminLogin";
import TerAndCon from "./components/homepage/TerAndCon";
import Nav from "./components/homepage/Nav";
import UserDashboard from "./components/userspanel/UserDashboard";
import ErrorPage from "./components/homepage/ErrorPage";
import TutorDashboard from "./components/tutorspanel/TutorDashboard";

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			username: "",
			userpass: "",
			isUserChecked: false,
			isTutorChecked: false,
			resState: ""
		};
	}
	handleChange = e => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};
	check = e => {
		this.setState({
			[e.target.name]: e.target.checked
		});
	};
	userLogout = () => {
		this.setState({
			resState: "",
			isUserChecked: false,
			isTutorChecked: false
		});
	};
	userLogin = e => {
		e.preventDefault();

		const user = this.state.username;
		const pass = this.state.userpass;
		const userLogged = 1;
		const tutorLogged = 0;

		if (this.state.isUserChecked && !this.state.isTutorChecked) {
			axios
				.post(
					`http://localhost/reactphp/login.php?username=${user}&userpass=${pass}&isLoggedIn=${userLogged}`
				)
				.then(res => {
					console.log(res);
					console.log(res.data);
					const LoggedInState = `${pass}` === res.data.Pass;
					this.setState(
						{
							resState: LoggedInState ? "USER" : false
						},
						console.log(this.state)
					);
				})
				.catch(err => console.log(err));
		}
		if (this.state.isTutorChecked && !this.state.isUserChecked) {
			axios
				.get(
					`http://localhost/reactphp/login.php?username=${user}&userpass=${pass}&isLoggedIn=${tutorLogged}`
				)
				.then(res => {
					console.log(res);
					console.log(res.data);
					const LoggedInState = `${pass}` === res.data.Pass;
					this.setState({
						resState: LoggedInState ? "TUTOR" : false
					});
					console.log(this.state);
				});
		}
	};

	render() {
		return (
			<Router>
				<div>
					<Nav resState={this.state.resState} userLogout={this.userLogout} />
					<Switch>
						<Route exact path="/" component={Homepage} />
						<Route
							path="/login"
							render={state => (
								<Login
									{...state}
									isLoggedIn={this.state.isLoggedIn}
									username={this.state.username}
									userpass={this.state.userpass}
									isUserChecked={this.state.isUserChecked}
									isTutorChecked={this.state.isTutorChecked}
									resState={this.state.resState}
									handleChange={this.handleChange}
									check={this.check}
									userLogin={this.userLogin}
								/>
							)}
						/>
						<Route path="/register" component={Register} />
						<Route path="/tutorials" component={Tutorials} />
						<Route path="/contactus" component={ContactUs} />
						<Route path="/about" component={About} />
						<Route path="/c" component={CLanguage} />
						<Route path="/javascript" component={JavaScript} />
						<Route path="/admin" component={AdminLogin} />
						<Route path="/terms" component={TerAndCon} />
						<Route
							path="/userdashboard"
							render={() =>
								this.state.resState === "USER" ? (
									<UserDashboard />
								) : (
									<Redirect to="/login" />
								)
							}
						/>
						<Route
							path="/tutordashboard"
							render={() =>
								this.state.resState === "TUTOR" ? (
									<TutorDashboard />
								) : (
									<Redirect to="/login" />
								)
							}
						/>
						<Route path="*" component={ErrorPage} />
					</Switch>
				</div>
			</Router>
		);
	}
}

export default App;

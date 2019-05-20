import React, { Component } from "react";
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect
} from "react-router-dom";

import Homepage from "./components/homepage/Homepage";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Tutorials from "./components/tutorials/Tutorials";
import ContactUs from "./components/auth/ContactUs";
import About from "./components/homepage/About";
import CLanguage from "./components/tutorials/cLangaugeFiles/CLanguage";
import JavaScript from "./components/tutorials/javascriptFiles/JavaScript";
import AdminLogin from "./components/adminpanel/AdminLogin";
import TerAndCon from "./components/homepage/TerAndCon";
import UserDashboard from "./components/userspanel/UserDashboard";
import ErrorPage from "./components/homepage/ErrorPage";
import "./App.css";
import AdminDashboard from "./components/adminpanel/AdminDashboard";
import CreatePost from "./components/adminpanel/CreatePost";
import AdminPosts from "./components/adminpanel/AdminPosts";
import { UserProvider, UserConsumer } from "./UserContext";
import { RegisterProvider } from "./RegisterContext";
import { AdminProvider, AdminConsumer } from "./AdminContext";

class App extends Component {
	render() {
		return (
			<Router>
				<Switch>
					<Route exact path="/" component={Homepage} />

					{/* Login and respective routes for Learner and Tutor */}
					<UserProvider>
						<Route path="/login" component={Login} />
						<UserConsumer>
							{usercontext => (
								<Route
									path="/userdashboard"
									render={() =>
										usercontext.state.resState === "USER" ? (
											<UserDashboard />
										) : (
											<Redirect to="/login" />
										)
									}
								/>
							)}
						</UserConsumer>
						<UserConsumer>
							{usercontext => (
								<Route
									path="/tutordashboard"
									render={() =>
										usercontext.state.resState === "TUTOR" ? (
											<UserDashboard />
										) : (
											<Redirect to="/login" />
										)
									}
								/>
							)}
						</UserConsumer>

						{/* Common Routes */}
						<RegisterProvider>
							<Route path="/register" component={Register} />
						</RegisterProvider>
						<Route path="/tutorials" component={Tutorials} />
						<Route path="/terms" component={TerAndCon} />
						<Route path="/contactus" component={ContactUs} />
						<Route path="/about" component={About} />
						<Route path="/c" component={CLanguage} />
						<Route path="/javascript" component={JavaScript} />

						{/* Admin Routes */}
						<AdminProvider>
							<Route path="/admin" component={AdminLogin} />
							<AdminConsumer>
								{admincontext => (
									<Route
										path="/admindashboard"
										render={() =>
											admincontext.state.isAdminLoggedIn ? (
												<AdminDashboard />
											) : (
												<Redirect to="/admin" />
											)
										}
									/>
								)}
							</AdminConsumer>
							<Route path="/createpost" component={CreatePost} />
							<Route path="/posts" component={AdminPosts} />
						</AdminProvider>
					</UserProvider>
					{/* 404 */}
					<Route path="*" component={ErrorPage} />
				</Switch>
			</Router>
		);
	}
}

export default App;

import React, { Component, Fragment } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

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
import AdminDashboard from "./components/adminpanel/AdminDashboard";
import CreatePost from "./components/adminpanel/CreatePost";
import AdminPosts from "./components/adminpanel/AdminPosts";
import { AdminProvider, AdminConsumer } from "./AdminContext";
import "./App.css";
import Php from "./components/tutorials/php/Php";
import Nav from "./components/homepage/Nav";

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<Fragment>
					<Nav />
					<Switch>
						<Route exact path="/" component={Homepage} />

						{/* Login and respective routes for Learner and Tutor */}

						<Route path="/login" component={Login} />
						<Route path="/userdashboard" component={UserDashboard} />

						{/* Common Routes */}

						<Route path="/register" component={Register} />
						<Route path="/tutorials" component={Tutorials} />
						<Route path="/terms" component={TerAndCon} />
						<Route path="/contactus" component={ContactUs} />
						<Route path="/about" component={About} />
						<Route path="/c" component={CLanguage} />
						<Route path="/php" component={Php} />
						<Route path="/javascript" component={JavaScript} />

						{/* Admin Routes */}
						<AdminProvider>
							<Route path="/admin" component={AdminLogin} />
							<Route path="/admindashboard" component={AdminDashboard} />
							<Route path="/createpost" component={CreatePost} />

							<AdminConsumer>
								{admincontext => (
									<Route
										path="/posts"
										render={() =>
											admincontext.state.isAdminLoggedIn ? (
												<AdminPosts />
											) : (
												<Redirect to="/admin" />
											)
										}
									/>
								)}
							</AdminConsumer>
						</AdminProvider>

						{/* 404 */}
						<Route path="*" component={ErrorPage} />
					</Switch>
				</Fragment>
			</BrowserRouter>
		);
	}
}

export default App;

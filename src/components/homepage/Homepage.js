import React, { Component } from "react";
import Body from "./Body";
import "./Homepage.css";
import Footer from "./Footer";
import Nav from "./Nav";
import { UserProvider } from "../../UserContext";
class Homepage extends Component {
	render() {
		return (
			<div className="homepage-body">
				<UserProvider>
					<Nav />
				</UserProvider>
				<Body />
				<Footer />
			</div>
		);
	}
}

export default Homepage;

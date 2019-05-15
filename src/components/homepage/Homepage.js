import React, { Component } from "react";
import Body from "./Body";
import "./Homepage.css";
import Footer from "./Footer";
class Homepage extends Component {
	render() {
		return (
			<div className="homepage-body">
				<Body />
				<Footer />
			</div>
		);
	}
}

export default Homepage;

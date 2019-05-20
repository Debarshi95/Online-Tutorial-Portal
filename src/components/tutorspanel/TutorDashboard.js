import React, { Component } from "react";
import TutorPosts from "./TutorPosts";
import TutorSidebar from "./TutorSidebar";
import "./Tutorpanel.css";
import Nav from "../homepage/Nav";

class TutorDashboard extends Component {
	render() {
		return (
			<div>
				<Nav />
				<TutorSidebar />
				<TutorPosts />
			</div>
		);
	}
}

export default TutorDashboard;

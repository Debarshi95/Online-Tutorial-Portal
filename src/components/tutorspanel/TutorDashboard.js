import React, { Component } from "react";
import TutorPosts from "./TutorPosts";
import TutorSidebar from "./TutorSidebar";
import "../styles/Tutorpanel.css";

class TutorDashboard extends Component {
	render() {
		return (
			<div>
				<TutorSidebar />
				<TutorPosts />
			</div>
		);
	}
}

export default TutorDashboard;

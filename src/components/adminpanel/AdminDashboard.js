import React, { Component } from "react";
import AdminDashSidebar from "./AdminDashSidebar";
import AdminBoard from "./AdminBoard";

export class AdminDashboard extends Component {
	render() {
		return (
			<div>
				<AdminDashSidebar />
				<AdminBoard />
			</div>
		);
	}
}

export default AdminDashboard;

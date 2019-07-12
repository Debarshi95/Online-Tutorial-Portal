import React from "react";
import { Link } from "react-router-dom";
import "./Adminpanel.css";
function AdminDashSidebar() {
	return (
		<div className="admin-sidebar">
			<ul className="ul">
				<Link to="/admindashboard" className="Link">
					My Dashboard
				</Link>
				<Link to="/createpost" className="Link">
					CreatePost
				</Link>

				<Link to="/posts" className="Link">
					All Posts
				</Link>

				<Link to="/" className="Link">
					1
				</Link>

				<Link to="/" className="Link">
					#
				</Link>

				<Link to="/" className="Link">
					#
				</Link>
			</ul>
		</div>
	);
}
export default AdminDashSidebar;

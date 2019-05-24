import React from "react";
import { Link } from "react-router-dom";
import "./AdminPanel.css";
function AdminDashSidebar() {
	return (
		<div className="admin-sidebar">
			<ul className="ul">
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

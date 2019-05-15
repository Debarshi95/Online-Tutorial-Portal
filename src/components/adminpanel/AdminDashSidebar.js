import React from "react";
import { Link } from "react-router-dom";
import "./Adminpanel.css";
function AdminDashSidebar() {
	return (
		<div className="nav flex-column admin-sidebar">
			<ul className="ul">
				<li className="li">
					<Link to="/createpost" className="Link">
						CreatePost
					</Link>
				</li>
				<li>
					<Link to="/posts" className="Link">
						All Posts
					</Link>
				</li>
				<li className="li">
					<Link to="/" className="Link">
						1
					</Link>
				</li>
				<li className="li">
					<Link to="/" className="Link">
						#
					</Link>
				</li>
				<li className="li">
					<Link to="/" className="Link">
						#
					</Link>
				</li>
			</ul>
		</div>
	);
}
export default AdminDashSidebar;

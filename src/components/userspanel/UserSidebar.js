import React from "react";
import { Link } from "react-router-dom";
function UserSidebar() {
	return (
		<div className="admin-sidebar">
			<ul className="ul">
				<Link to="/createpost" className="Link">
					Courses
				</Link>

				<Link to="/posts" className="Link">
					Javascript
				</Link>

				<Link to="/" className="Link">
					C
				</Link>

				<Link to="/php" className="Link">
					PHP
				</Link>

				<Link to="/" className="Link">
					#
				</Link>
			</ul>
		</div>
	);
}
export default UserSidebar;

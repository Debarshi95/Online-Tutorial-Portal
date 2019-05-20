import React from "react";
import { NavLink } from "react-router-dom";
function TutorSidebar() {
	return (
		<div class="row">
			<div class="col-7">
				<div
					class="nav flex-column nav-pills tutor-sidebar"
					id="v-pills-tab"
					role="tablist"
					aria-orientation="vertical"
				>
					<NavLink to="/userdashboard" class="side-link top-link">
						Dashboard
					</NavLink>
					<NavLink to="/posts" class="side-link">
						Posts
					</NavLink>
					<NavLink to="/" class="side-link">
						Messages
					</NavLink>
					<NavLink to="/" class="side-link">
						Settings
					</NavLink>
				</div>
			</div>
		</div>
	);
}
export default TutorSidebar;

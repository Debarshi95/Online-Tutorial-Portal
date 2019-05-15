import React, { Component } from "react";
import axios from "axios";

class Body extends Component {
	render() {
		return (
			<div>
				<div class="jumbotron jumbotron-fluid jumbotron-height">
					<h1 class="display-4">Hello, world!</h1>
					<p class="lead">
						This is a simple hero unit, a simple jumbotron-style component for
						calling extra attention to featured content or information.
					</p>
				</div>
				<div className="middle-body">
					<h2>Body</h2>

					<div className="card">hi</div>
				</div>
			</div>
		);
	}
}
export default Body;

import React, { Component } from "react";
import axios from "axios";
import "./Adminpanel.css";
import AdminDashSidebar from "./AdminDashSidebar";

export class CreatePost extends Component {
	constructor(props) {
		super(props);

		this.state = {
			title: "",
			content: ""
		};
	}

	handleChange = e => {
		this.setState({
			[e.target.id]: e.target.value
		});
	};
	handleSubmit = e => {
		e.preventDefault();
		const newTitle = this.state.title;
		const newContent = this.state.content;
		axios
			.get(
				`http://localhost/reactphp/adminposts.php?title=${newTitle}&content=${newContent}`
			)
			.then(res => {
				console.log(res);
				console.log(res.data);
			})
			.catch(err => console.log(err));
		console.log(this.state);
	};
	render() {
		return (
			<div>
				<AdminDashSidebar />
				<div className="row p-2">
					<div className="col-12">
						<form method="post" className="p-5">
							<label className="font-weight-bold">Title</label>
							<input
								type="text"
								name="title"
								placeholder="Title"
								className="form-control"
							/>
							<label className="font-weight-bold mt-2">Body</label>
							<textarea
								name="body"
								placeholder="Body"
								className="form-control createpost-body-text"
							/>
							<input
								type="submit"
								value="POST"
								className="btn btn-success mt-4"
							/>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

export default CreatePost;

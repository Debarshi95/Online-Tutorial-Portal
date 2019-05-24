import React, { Component } from "react";
import axios from "axios";
import "./AdminPanel.css";
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
				<div className="createpost-card">
					<form onSubmit={this.handleSubmit}>
						<div className="form-group">
							<label>Title</label>
							<input
								type="text"
								id="title"
								className="form-control"
								onChange={this.handleChange}
							/>
						</div>
						<br />
						<div className="form-group">
							<label>Content</label>
							<textarea
								className="form-control post-text"
								id="content"
								onChange={this.handleChange}
							/>
							<br />
						</div>
						<input
							type="submit"
							value="Post"
							className="btn btn-dark post-submit-btn"
						/>
					</form>
				</div>
				<div className="card createpost-top-right-sidebar">
					<label htmlFor="category">Category</label>
					<input type="text" className="form-control" />
				</div>
			</div>
		);
	}
}

export default CreatePost;

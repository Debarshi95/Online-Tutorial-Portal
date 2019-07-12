import React, { Component } from "react";
import axios from "axios";
import PostsBody from "./PostsBody";
import Sidebar from "./Sidebar";
import "./php.css";

class Php extends Component {
	constructor(props) {
		super(props);
		this.state = {
			posts: [],
			title: "",
			content: ""
		};
	}
	componentDidMount() {
		axios({
			url:
				"http://localhost/rest-api-authentication-example/api/api/php/read.php",
			method: "POST"
		})
			.then(res => {
				console.log(res);
				this.setState(
					{
						posts: res.data
					},
					() => {
						console.log(this.state);
					}
				);
			})
			.catch(err => console.log(err));
	}
	changePost = id => {
		axios({
			url:
				"http://localhost/rest-api-authentication-example/api/api/php/single.php?id=" +
				id,
			method: "GET",

			config: {
				headers: { "Content-Type": "application/json" }
			}
		})
			.then(res => {
				console.log(res);
				this.setState(
					{
						title: res.data.title,
						content: res.data.content
					},
					() => {
						console.log(this.state.content);
					}
				);
			})
			.catch(err => console.log(err));
		console.log(id);
	};
	render() {
		const posts = this.state.posts.map(post => {
			return (
				<h5
					key={post.id}
					onClick={() => {
						this.changePost(post.id);
					}}
				>
					{post.title}
				</h5>
			);
		});

		return (
			<div className="container-fluid">
				<div className="row">
					<div className="col-2 posts-navbar">
						<Sidebar posts={posts} />
					</div>
					<div className="col-9">
						<PostsBody content={this.state.content} title={this.state.title} />
					</div>
				</div>
			</div>
		);
	}
}
export default Php;

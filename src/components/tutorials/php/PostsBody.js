import React from "react";

function PostsBody({ content, title }) {
	console.log({ content });
	return (
		<div>
			<h4>{title} </h4>
			<p>{content}</p>
		</div>
	);
}
export default PostsBody;

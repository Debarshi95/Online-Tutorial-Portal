import React, { Component } from "react";
import axios from "axios";
import "./AdminPanel.css";

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
        `http://localhost/reactphp/admin.php?title=${newTitle}&content=${newContent}`
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
      <div className="createpost-body">
        <div className="createpost-card">
          <form onSubmit={this.handleSubmit}>
            <label className="labels">Title</label>
            <input
              type="text"
              id="title"
              className="post-input"
              onChange={this.handleChange}
            />
            <br />
            <label className="labels textarea">Content</label>
            <textarea
              className="post-text"
              id="content"
              onChange={this.handleChange}
            />
            <br />
            <input type="submit" value="Post" className="post-submit-btn" />
          </form>
        </div>
      </div>
    );
  }
}

export default CreatePost;

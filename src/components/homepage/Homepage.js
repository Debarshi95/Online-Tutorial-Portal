import React, { Component } from "react";
import Nav from "./Nav";
import Content from "./Content";
import "./Homepage.css";
import Footer from "./Footer";
class Homepage extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default Homepage;

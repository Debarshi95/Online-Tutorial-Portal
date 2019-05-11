import React from "react";
import html from "./Images/html.png";
import css from "./Images/css.png";
import php from "./Images/php.png";
import javascript from "./Images/javascript.png";
import bgimage from "./Images/bg-image.jpg";
import c from "./Images/c.png";
import java from "./Images/java.png";

function Content() {
  return (
    <div className="bap">
      <div>
        <img className="image" src={bgimage} />
      </div>
      <img className="image" />
      <h1 className="h1">Some of our courses are:</h1>
      <div className="main">
        <div className="card">
          <img className="padding" src={html} alt="html" />
          <div className="container">
            <h4>HTML</h4>
          </div>
        </div>
        <div className="card">
          <img className="padding" src={css} />
          <div className="container">
            <h4>
              <b>CSS</b>
            </h4>
          </div>
        </div>
        <div className="card">
          <img className="padding" src={php} />
          <div className="container">
            <h4>PHP</h4>
          </div>
        </div>
      </div>
      <div className="main1">
        <div className="card">
          <img src={javascript} />
          <div className="container">
            <h4>JavaScript</h4>
          </div>
        </div>
        <div className="card">
          <img className="padding" src={c} />
          <div className="container">
            <h4>C</h4>
          </div>
        </div>
        <div className="card">
          <img className="padding" src={java} />
          <div className="container">
            <h4>Java</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Content;

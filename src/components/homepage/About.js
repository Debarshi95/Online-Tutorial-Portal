import React from "react";
import Nav from "./Nav";
function About() {
  return (
    <div>
      <Nav />
      <div className="main3">
        <br />
        <br />
        <h1 align="center">
          <b>
            Our main aim is to provide easy and Quality Tutorial for Student.
          </b>
        </h1>
        <br />
        <br />
        <i>
          <ol className="list">
            <li>
              We also try to give extra knowledge in the Tutorial. with Notes or
              other important info.
            </li>
            <li>
              We will also add Exercise and Practical at the end of every
              Tutorial very soon.
            </li>
            <li>
              We provide great platform for Extra Ordinary Students who want to
              share their knowledge with <br />
              other students.
            </li>
            <li>
              If you have Great knowledge about any Computer related subject,
              you can also contribute to write
              <br />
              Tutorial or Practical of Program.
            </li>
            <li>
              If you think you can write better than any Tutorial in this site,
              or provide any improvement in Tutorial <br />
              you can Contact Us.
            </li>
            <li>Any other Suggestions are welcomed.</li>
          </ol>
        </i>
      </div>
    </div>
  );
}
export default About;

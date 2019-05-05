import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div className="row">
        <div className="column">
          <h2>
            <u>CONTACT INFO</u>
          </h2>
          <br />
          <p>Email:abc123@gmail.com</p>
          <br />
        </div>
        <div className="column">
          <h2>
            <u>PROGRAMLEARNERS</u>
          </h2>
          <br />

          <Link to="/about">
            <p>
              <li>About Us</li>
            </p>
          </Link>
          <Link to="/contactus">
            <p>
              <li>Contact Us</li>
            </p>
          </Link>
          <Link to="/terms">
            <p>
              <li>Terms and Conditions</li>
            </p>
          </Link>
        </div>
      </div>
      <div className="row">
        <div className="column">
          <b id="blue">@Programlearners.com-2019</b>
        </div>
        <div className="column">
          <i className="fa fa-facebook-official fa-2x" aria-hidden="true" />
          &nbsp;&nbsp;
          <i className="fa fa-twitter-square  fa-2x" aria-hidden="true" />
          &nbsp;&nbsp;
          <i className="fa fa-instagram fa-2x" aria-hidden="true" />
          &nbsp;&nbsp;
        </div>
      </div>
    </div>
  );
}
export default Footer;

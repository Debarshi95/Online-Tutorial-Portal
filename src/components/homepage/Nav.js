import React, { Component } from "react";
import LoggedInLinks from "./LoggedInLinks";
import LoggedOutLinks from "./LoggedOutLinks";
class Nav extends Component {
  constructor() {
    super();

    this.state = {
      isLoggedIn: ""
    };
  }

  render() {
    let LoginState = this.state.isloggedIn ? (
      <div>
        <ul>
          <LoggedInLinks />
        </ul>
      </div>
    ) : (
      <div>
        <ul>
          <LoggedOutLinks />
        </ul>
      </div>
    );
    return <div>{LoginState}</div>;
  }
}
export default Nav;

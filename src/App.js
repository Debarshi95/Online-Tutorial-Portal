import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Homepage from "./components/homepage/Homepage";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import "./App.css";
import Tutorials from "./components/tutorialspage/Tutorials";
import ContactUs from "./components/auth/ContactUs";
import About from "./components/homepage/About";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import CLanguage from "./components/tutorialspage/cLangaugeFiles/CLanguage";
import JavaScript from "./components/tutorialspage/javascriptFiles/JavaScript";
import AdminLogin from "./components/adminpanel/AdminLogin";
import TerAndCon from "./components/homepage/TerAndCon";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/tutorials" component={Tutorials} />
            <Route path="/contactus" component={ContactUs} />
            <Route path="/about" component={About} />
            <Route path="/c" component={CLanguage} />
            <Route path="/javascript" component={JavaScript} />
            <Route path="/admin" component={AdminLogin} />
            <Route path="/terms" component={TerAndCon} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

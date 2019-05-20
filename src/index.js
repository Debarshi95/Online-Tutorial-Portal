import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
 //import "bootstrap/dist/js/bootstrap.js";
import { library } from "@fortawesome/fontawesome-svg-core";

import {
	faUser,
	faKey,
	faEnvelope,
	faAt
} from "@fortawesome/free-solid-svg-icons";

library.add(faUser, faKey, faEnvelope, faAt);
ReactDOM.render(<App />, document.getElementById("root"));

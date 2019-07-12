import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import { library } from "@fortawesome/fontawesome-svg-core";

import {
	faUser,
	faKey,
	faEnvelope,
	faAt
} from "@fortawesome/free-solid-svg-icons";
import { UserProvider } from "./UserContext";

library.add(faUser, faKey, faEnvelope, faAt);
ReactDOM.render(
	<UserProvider>
		<App />
	</UserProvider>,
	document.getElementById("root")
);

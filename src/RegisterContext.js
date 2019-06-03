import React, { Component } from "react";
import axios from "axios";

const RegisterContext = React.createContext();

class RegisterProvider extends Component {
	state = {
		firstname: "",
		lastname: "",
		username: "",
		email: "",
		password: "",
		password2: "",
		isUserChecked: "",
		isTutorChecked: ""
	};

	handleChange = e => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};
	check = e => {
		this.setState({
			[e.target.name]: e.target.checked
		});
	};
	handleRegister = e => {
		e.preventDefault();

		if (this.state.isUserChecked && !this.state.isTutorChecked) {
			axios({
				url:
					"http://localhost/rest-api-authentication-example/api/create_user.php",
				method: "post",
				data: this.state,
				config: {
					headers: { "Content-Type": "application/json" }
				}
			})
				.then(res => {
					console.log(res);
					console.log(res.data);
				})
				.catch(err => console.log(err));
		} else if (this.state.isTutorChecked && !this.state.isUserChecked) {
			axios({
				url:
					"http://localhost/rest-api-authentication-example/api/create_tutor.php",
				method: "post",
				data: this.state,
				config: {
					headers: { "Content-Type": "application/json" }
				}
			})
				.then(res => {
					console.log(res);
					console.log(res.data);
				})
				.catch(err => console.log(err));
		}
		console.log(this.state);
	};
	render() {
		return (
			<RegisterContext.Provider
				value={{
					state: this.state,
					handleChange: this.handleChange,
					check: this.check,
					handleRegister: this.handleRegister
				}}
			>
				{this.props.children}
			</RegisterContext.Provider>
		);
	}
}

const RegisterConsumer = RegisterContext.Consumer;
export { RegisterProvider, RegisterConsumer };

import React, { Component } from "react";
import axios from "axios";

const UserContext = React.createContext();

class UserProvider extends Component {
	state = {
		email: "",
		password: "",
		isUserChecked: false,
		isTutorChecked: false,
		resState: ""
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
	userLogout = () => {
		this.setState({
			resState: "",
			isUserChecked: false,
			isTutorChecked: false
		});
	};
	userLogin = e => {
		e.preventDefault();

		if (this.state.isUserChecked && !this.state.isTutorChecked) {
			axios({
				url:
					"http://localhost/rest-api-authentication-example/api/user_login.php",
				method: "post",
				data: {
					email: this.state.email,
					password: this.state.password
				},
				config: {
					headers: { "Content-Type": "application/json" }
				}
			})
				.then(res => {
					console.log(res);
					console.log(res.data);
					localStorage.setItem("token", res.data.jwt);
					const LoggedInState = localStorage.getItem("token");
					this.setState(
						{
							resState: LoggedInState
						},
						() => {
							console.log(this.state);
						}
					);
				})
				.catch(err => console.log(err));
		}
		if (this.state.isTutorChecked && !this.state.isUserChecked) {
			axios({
				url:
					"http://localhost/rest-api-authentication-example/api/tutor_login.php",
				method: "post",
				data: {
					email: this.state.email,
					password: this.state.password
				},
				config: {
					headers: { "Content-Type": "application/json" }
				}
			}).then(res => {
				console.log(res);
				console.log(res.data);
				localStorage.setItem("token", res.data.jwt);

				console.log(this.state);
			});
		}
	};

	render() {
		return (
			<UserContext.Provider
				value={{
					state: this.state,
					handleChange: this.handleChange,
					check: this.check,
					userLogout: this.userLogout,
					userLogin: this.userLogin
				}}
			>
				{this.props.children}
			</UserContext.Provider>
		);
	}
}

const UserConsumer = UserContext.Consumer;
export { UserProvider, UserConsumer };

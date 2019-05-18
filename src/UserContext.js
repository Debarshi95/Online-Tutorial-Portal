import React, { Component } from "react";
import axios from "axios";

const UserContext = React.createContext();

class UserProvider extends Component {
	state = {
		username: "",
		userpass: "",
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

		const user = this.state.username;
		const pass = this.state.userpass;
		const userLogged = 1;
		const tutorLogged = 0;

		if (this.state.isUserChecked && !this.state.isTutorChecked) {
			axios
				.post(
					`http://localhost/reactphp/login.php?username=${user}&userpass=${pass}&isLoggedIn=${userLogged}`
				)
				.then(res => {
					console.log(res);
					console.log(res.data);
					const LoggedInState = `${pass}` === res.data.Pass;
					this.setState(
						{
							resState: LoggedInState ? "USER" : false
						},
						console.log(this.state)
					);
				})
				.catch(err => console.log(err));
		}
		if (this.state.isTutorChecked && !this.state.isUserChecked) {
			axios
				.get(
					`http://localhost/reactphp/login.php?username=${user}&userpass=${pass}&isLoggedIn=${tutorLogged}`
				)
				.then(res => {
					console.log(res);
					console.log(res.data);
					const LoggedInState = `${pass}` === res.data.Pass;
					this.setState({
						resState: LoggedInState ? "TUTOR" : false
					});
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

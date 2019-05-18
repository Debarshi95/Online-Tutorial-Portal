import React, { Component } from "react";
import axios from "axios";

const RegisterContext = React.createContext();

class RegisterProvider extends Component {
	state = {
		firstname: "",
		lastname: "",
		user: "",
		email: "",
		pass: "",
		pass2: "",
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

		const firstname = this.state.firstname;
		const lastname = this.state.lastname;
		const user = this.state.user;
		const email = this.state.email;
		const pass = this.state.pass;
		const pass2 = this.state.pass2;
		const isUserChecked = this.state.isUserChecked;
		const isTutorChecked = this.state.isTutorChecked;
		if (this.state.isUserChecked && !this.state.isTutorChecked) {
			axios
				.post(
					`http://localhost/reactphp/users.php?firstname=${firstname}&lastname=${lastname}&user=${user}&email=${email}&pass=${pass}&pass2=${pass2}&isUserChecked=${isUserChecked}`
				)
				.then(res => {
					console.log(res);
					console.log(res.data);
				})
				.catch(err => console.log(err));
		} else if (this.state.isTutorChecked && !this.state.isUserChecked) {
			axios
				.post(
					`http://localhost/reactphp/tutors.php?firstname=${firstname}&lastname=${lastname}&user=${user}&email=${email}&pass=${pass}&pass2=${pass2}&isTutorChecked=${isTutorChecked}`
				)
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

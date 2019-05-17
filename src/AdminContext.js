import React, { Component } from "react";
import axios from "axios";

const AdminContext = React.createContext();

class AdminProvider extends Component {
	state = {
		user: "",
		pass: "",
		isAdminLoggedIn: false

		// courses: []
	};

	handleChange = e => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	handleAdminLogin = e => {
		e.preventDefault();
		console.log(this.state);

		const user = this.state.user;
		const pass = this.state.pass;
		axios
			.get(`http://localhost/reactphp/adminauth.php?user=${user}&pass=${pass}`)
			.then(res => {
				console.log(res.data);
				const AdminState = `${pass}` === res.data.Pass;
				this.setState(
					{
						isAdminLoggedIn: AdminState ? true : false
					},
					() => {
						console.log(this.state);
					}
				);
			})
			.catch(err => console.log(err));
	};
	render() {
		return (
			<AdminContext.Provider
				value={{
					state: this.state,
					handleChange: this.handleChange,
					check: this.check,
					handleAdminLogin: this.handleAdminLogin
				}}
			>
				{this.props.children}
			</AdminContext.Provider>
		);
	}
}
const AdminConsumer = AdminContext.Consumer;
export { AdminProvider, AdminConsumer };

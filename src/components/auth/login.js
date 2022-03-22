import React, { Component } from 'react';
import axios from 'axios';

export default class Login extends Component {
	constructor(props) {
		super(props);

		this.state = {
			email: '',
			password: '',
			errorText: '',
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value,
			errorText: '',
		});
	}

	handleSubmit(event) {
		axios
			.post('https://bianca-ecommerce-backend.herokuapp.com/login', {
				email: this.state.email,
				password: this.state.password,
			})
			.then((response) => {
				console.log(response);
				sessionStorage.setItem('email', response.data.user_email);
				const emailLog = sessionStorage.getItem('email');
				if (emailLog == 'bianca01@test.com') {
					return this.props.handleSuccessfulAuth();
				}
				this.props.handleUnsuccessfulAuth();
				this.setState({
					errorText: 'An error occurred',
				});
			})
			.catch((error) => {
				this.setState({
					errorText: 'An error occurred',
				});
				this.props.handleUnsuccessfulAuth();
			});

		event.preventDefault();
	}

	render() {
		return (
			<div className="wrapper-login">
				<div className="right-column">
					<h1>Login to access </h1>

					<div>{this.state.errorText}</div>

					<form onSubmit={this.handleSubmit}>
						<input
							type="email"
							name="email"
							placeholder="Your email"
							value={this.state.email}
							onChange={this.handleChange}
						/>

						<input
							type="password"
							name="password"
							placeholder="Your password"
							value={this.state.password}
							onChange={this.handleChange}
						/>

						<div>
							<button type="submit">Login</button>
						</div>
					</form>
				</div>
			</div>
		);
	}
}

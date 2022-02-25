import React, { Component } from 'react';
import axios from 'axios';

import loginImg from '../../../static/assets/images/login.jpg';

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
			})
			.catch((error) => {
				this.setState({
					errorText: 'An error occurred',
				});
			});

		event.preventDefault();
		this.props.history.push('/');
	}

	render() {
		return (
			<div className="wrapper-login">
				<div className="left-column">
					<img src={loginImg} />
				</div>
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

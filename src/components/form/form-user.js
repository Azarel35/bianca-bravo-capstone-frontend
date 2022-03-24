import React, { Component } from 'react';
import axios from 'axios';
import emailjs from 'emailjs-com';

export default class FormUser extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: '',
			email: '',
			password: '',
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSendEmail = this.handleSendEmail.bind(this);
	}

	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value,
			errorText: '',
		});
	}

	handleSendEmail(e) {
		e.preventDefault();

		emailjs
			.sendForm(
				'service_q4nbvvr',
				'template_fsue23m',
				e.target,
				'user_EmJOAO1oBQI1352apqzkX'
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
		axios
			.post('https://bianca-ecommerce-backend.herokuapp.com/user', {
				name: this.state.name,
				email: this.state.email,
				password: this.state.password,
			})
			.then((res) => {
				console.log('guardado');
			})
			.catch((error) => console.log(error));
		e.target.reset();
	}

	render() {
		return (
			<div>
				<div className="form-container">
					<form onSubmit={this.handleSendEmail}>
						<div className="wrapper-form">
							<h2>New customer registration</h2>
							<div className="form-name">
								<input
									type="text"
									className="form-control"
									placeholder="Name"
									name="name"
									onChange={this.handleChange}
								/>
							</div>
							<div className="form-email">
								<input
									type="email"
									className="form-control"
									placeholder="Email Address"
									name="email"
									onChange={this.handleChange}
								/>
							</div>

							<div className="form-password">
								<input
									type="password"
									className="form-control"
									placeholder="Password"
									name="password"
									onChange={this.handleChange}
								/>
							</div>

							<div className="form-street">
								<input
									type="address"
									className="form-control"
									placeholder="Street Address"
									name="address"
								/>
							</div>

							<div className="form-number">
								<input
									type="address"
									className="form-control"
									placeholder="Number Address"
									name="address"
								/>
							</div>
							<div className="form-city">
								<input
									type="address"
									className="form-control"
									placeholder="City Address"
									name="address"
								/>
							</div>

							<div className="form-button">
								<input
									type="submit"
									className="btn-info"
									value="Registration successful"
								></input>
							</div>
						</div>
					</form>
				</div>
			</div>
		);
	}
}

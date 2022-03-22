import React, { Component } from 'react';

import Login from './login';
import loginImg from '../../../static/assets/images/login.jpg';

export default class Auth extends Component {
	constructor(props) {
		super(props);

		this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
		this.handleUnsuccessfulAuth = this.handleUnsuccessfulAuth.bind(this);
	}

	handleSuccessfulAuth() {
		this.props.handleSuccessfulLogin();
		this.props.history.push('/');
	}

	handleUnsuccessfulAuth() {
		this.props.handleUnsuccessfulLogin();
	}

	render() {
		return (
			<div className="wrapper-login">
				<div className="left-column">
					<img src={loginImg} />
				</div>
				<Login
					handleSuccessfulAuth={this.handleSuccessfulAuth}
					handleUnsuccessfulAuth={this.handleUnsuccessfulAuth}
				/>
			</div>
		);
	}
}

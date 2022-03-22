import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import Home from './pages/home';

export default class Navbar extends Component {
	constructor() {
		super();

		this.handleSignOut = this.handleSignOut.bind(this);
	}

	handleSignOut() {
		sessionStorage.clear();
		this.props.handleSuccessfulLogout();
		return <Home />;
	}

	render() {
		return (
			<div className="navbar-wrapper">
				<div className="left-navlink">
					<NavLink exact to="/" activeClassName="nav-link-active">
						BA&SH
					</NavLink>
				</div>

				<div className="right-side">
					<div className="right-navlink">
						<NavLink to="/login" activeClassName="nav-link-active">
							<div className="name-user">
								<h3>Log In</h3>
							</div>
						</NavLink>
					</div>
					<div className="right-registro">
						<NavLink to="/form-user" activeClassName="nav-link-active">
							<div className="icon-user">
								<FontAwesomeIcon icon={faUser} />
							</div>
						</NavLink>
					</div>
					<div className="right-bag">
						<NavLink to="/shopping-bag" activeClassName="nav-link-active">
							<div className="icon-bag">
								<FontAwesomeIcon icon={faBagShopping} />
							</div>
						</NavLink>
					</div>
					<div className="right-login">
						<div className="icon-logout">
							<a onClick={this.handleSignOut}>
								<FontAwesomeIcon icon={faRightFromBracket} />
							</a>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';

export default class Navbar extends Component {
	constructor() {
		super();
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
				</div>
			</div>
		);
	}
}

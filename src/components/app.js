import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './navbar';
import Home from './pages/home';
import PageDresses from './pages/page-dresses';
import PageBlouses from './pages/page-blouses';
import PagePants from './pages/page-pants';
import Auth from './auth/auth';
import NoMatch from './pages/no-match';
import ShoppingBag from './bag/shopping-bag';
import FormUser from './form/form-user';
import PageFooter from './footer-page';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loggedInStatus: 'NOT_LOGGED_IN',
		};

		this.handleSuccessfulLogin = this.handleSuccessfulLogin.bind(this);
		this.handleUnsuccessfulLogin = this.handleUnsuccessfulLogin.bind(this);
		this.handleSuccessfulLogout = this.handleSuccessfulLogout.bind(this);
	}

	handleSuccessfulLogin() {
		this.setState({
			loggedInStatus: 'LOGGED_IN',
		});
	}

	handleUnsuccessfulLogin() {
		this.setState({
			loggedInStatus: 'NOT_LOGGED_IN',
		});
	}

	handleSuccessfulLogout() {
		this.setState({
			loggedInStatus: 'NOT_LOGGED_IN',
		});
	}

	render() {
		if (this.state.loggedInStatus == 'LOGGED_IN') {
			return (
				<div className="container">
					<Router>
						<div>
							<Navbar handleSuccessfulLogout={this.handleSuccessfulLogout} />
							<Switch>
								<Route
									path="/login"
									render={(props) => (
										<Auth
											{...props}
											handleSuccessfulLogin={this.handleSuccessfulLogin}
											handleUnsuccessfulLogin={this.handleUnsuccessfulLogin}
										/>
									)}
								/>
								<Route exact path="/" component={Home} />
								<Route exact path="/dresses" component={PageDresses} />
								<Route exact path="/blouses" component={PageBlouses} />
								<Route exact path="/pants" component={PagePants} />
								<Route exact path="/shopping-bag" component={ShoppingBag} />
								<Route exact path="/form-user" component={FormUser} />

								<Route
									path="/logout"
									render={(props) => (
										<Logout
											{...props}
											handleSuccessfulLogin={this.handleSuccessfulLogin}
											handleUnsuccessfulLogin={this.handleUnsuccessfulLogin}
										/>
									)}
								/>
								<Route component={NoMatch} />
							</Switch>
							<PageFooter />
						</div>
					</Router>
				</div>
			);
		}

		return (
			<div className="container">
				<Router>
					<div>
						<Navbar />
						<Switch>
							<Route
								path="/login"
								render={(props) => (
									<Auth
										{...props}
										handleSuccessfulLogin={this.handleSuccessfulLogin}
										handleUnsuccessfulLogin={this.handleUnsuccessfulLogin}
									/>
								)}
							/>

							<Route exact path="/form-user" component={FormUser} />

							<Route component={NoMatch} />
						</Switch>
						<PageFooter />
					</div>
				</Router>
			</div>
		);
	}
}

import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './navbar';
import Home from './pages/home';
import PageDresses from './pages/page-dresses';
import PageBlouses from './pages/page-blouses';
import PagePants from './pages/page-pants';
import Login from './auth/login';
import NoMatch from './pages/no-match';
import ShoppingBag from './bag/shopping-bag';
import FormUser from './form/form-user';
import PageFooter from './footer-page';

export default class App extends Component {
	render() {
		return (
			<div className="container">
				<Router>
					<div>
						<Navbar />
						<Switch>
							<Route exact path="/" component={Home} />
							<Route exact path="/login" component={Login} />
							<Route exact path="/dresses" component={PageDresses} />
							<Route exact path="/blouses" component={PageBlouses} />
							<Route exact path="/pants" component={PagePants} />
							<Route exact path="/shopping-bag" component={ShoppingBag} />
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

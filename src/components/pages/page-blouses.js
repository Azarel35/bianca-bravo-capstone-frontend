import React, { Component } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

import ProductWhite from '../products/product-whiteblouse';
import ProductBlue from '../products/product-blue';
import BlouseBlue from '../../../static/assets/images/blouseblue.jpg';
import BlouseWhite from '../../../static/assets/images/whiteBlouse.jpg';
import FucsiaBlouse from '../../../static/assets/images/blusarosa.jpg';
import ProductFucsia from '../products/product-fucsia';

export default class PageBlouses extends Component {
	constructor() {
		super();
		this.state = {
			data: [],
		};
	}

	getProducts() {
		axios
			.get('https://bianca-ecommerce-backend.herokuapp.com/products')
			.then((response) => {
				this.setState({
					data: [...response.data],
				});
				console.log(response);
			})
			.catch((error) => {
				console.log(error);
			});
	}

	componentDidMount() {
		this.getProducts();
	}

	render() {
		return (
			<div className="wrapper-blouses">
				<div className="item-blouse">
					<img src={BlouseWhite} />
					<ProductWhite data={this.state.data} />
					<NavLink to="/shopping-bag" activeClassName="nav-link-active">
						<button>To buy</button>
					</NavLink>
				</div>
				<div className="item-blouse">
					<img src={BlouseBlue} />
					<ProductBlue data={this.state.data} />
					<NavLink to="/shopping-bag" activeClassName="nav-link-active">
						<button>To buy</button>
					</NavLink>
				</div>
				<div className="item-blouse">
					<img src={FucsiaBlouse} />
					<ProductFucsia data={this.state.data} />
					<NavLink to="/shopping-bag" activeClassName="nav-link-active">
						<button>To buy</button>
					</NavLink>
				</div>
			</div>
		);
	}
}

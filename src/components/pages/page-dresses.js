import React, { Component } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

import ProductBlack from '../products/product-black';
import BlackDress from '../../../static/assets/images/dressblack.jpg';
import RedDress from '../../../static/assets/images/red-dress.jpg';
import GreenDress from '../../../static/assets/images/greendress.jpg';
import ProductGreen from '../products/product-green';
import ProductRed from '../products/product-red';

export default class PageDresses extends Component {
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
			<div className="wrapper-dresses">
				<div className="item-dress">
					<img src={BlackDress} />

					<ProductBlack data={this.state.data} />

					<NavLink to="/shopping-bag" activeClassName="nav-link-active">
						<button>To buy</button>
					</NavLink>
				</div>
				<div className="item-dress">
					<img src={GreenDress} />
					<ProductGreen data={this.state.data} />

					<NavLink to="/shopping-bag" activeClassName="nav-link-active">
						<button>To buy</button>
					</NavLink>
				</div>
				<div className="item-dress">
					<img src={RedDress} />
					<ProductRed data={this.state.data} />
					<NavLink to="/shopping-bag" activeClassName="nav-link-active">
						<button>To buy</button>
					</NavLink>
				</div>
			</div>
		);
	}
}

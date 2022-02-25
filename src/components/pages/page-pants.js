import React, { Component } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

import jeans from '../../../static/assets/images/jeans.jpg';
import PantsStripes from '../../../static/assets/images/pantsrayas.jpg';
import BeigePants from '../../../static/assets/images/beigepants.jpg';
import ProductsJeans from '../products/product-jeans';
import ProductBeige from '../products/product-beige';
import ProductGray from '../products/product-gray';

export default class PagePants extends Component {
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
			<div className="wrapper-pants">
				<div className="item-pants">
					<img src={jeans} />
					<ProductsJeans data={this.state.data} />
					<NavLink to="/shopping-bag" activeClassName="nav-link-active">
						<button>To buy</button>
					</NavLink>
				</div>
				<div className="item-pants">
					<img src={PantsStripes} />
					<ProductGray data={this.state.data} />
					<NavLink to="/shopping-bag" activeClassName="nav-link-active">
						<button>To buy</button>
					</NavLink>
				</div>
				<div className="item-pants">
					<img src={BeigePants} />
					<ProductBeige data={this.state.data} />
					<NavLink to="/shopping-bag" activeClassName="nav-link-active">
						<button>To buy</button>
					</NavLink>
				</div>
			</div>
		);
	}
}

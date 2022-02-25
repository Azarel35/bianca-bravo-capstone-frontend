import React, { Component } from 'react';
import { useState } from 'react';

import Bag from './add-bag';
import BagItems from './bag-items';
import data from './info-product';

function ShoppingBag() {
	const { products } = data;
	const [cartItems, setCartItems] = useState([]);
	const onAdd = (product) => {
		const exist = cartItems.find((x) => x.id === product.id);
		if (exist) {
			setCartItems(
				cartItems.map((x) =>
					x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
				)
			);
		} else {
			setCartItems([...cartItems, { ...product, qty: 1 }]);
		}
	};
	const onRemove = (product) => {
		const exist = cartItems.find((x) => x.id === product.id);
		if (exist.qty === 1) {
			setCartItems(cartItems.filter((x) => x.id !== product.id));
		} else {
			setCartItems(
				cartItems.map((x) =>
					x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
				)
			);
		}
	};
	return (
		<div className="wrapper-shopping-bag">
			<div className="bag-items-left">
				<BagItems products={products} onAdd={onAdd}></BagItems>
			</div>
			<div className="bag-items-right">
				<Bag cartItems={cartItems} onAdd={onAdd} onRemove={onRemove}></Bag>
			</div>
		</div>
	);
}

export default ShoppingBag;

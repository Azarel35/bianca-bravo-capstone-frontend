import React from 'react';

import CompleteOrder from './complete-order';

export default function Bag(props) {
	const { cartItems, onAdd, onRemove } = props;
	const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
	const totalPrice = itemsPrice;
	return (
		<div className="wrapper-bag-items">
			<h2>Order summary</h2>
			<div>
				{cartItems.length === 0 && <div>Bag is empty</div>}
				{cartItems.map((item) => (
					<div key={item.id} className="bag">
						<div className="bag-name">{item.name}</div>
						<div className="wrapper-button">
							<button onClick={() => onRemove(item)} className="remove">
								-
							</button>{' '}
							<button onClick={() => onAdd(item)} className="add">
								+
							</button>
						</div>

						<div className="bag-text-right">
							{item.qty} x ${item.price}
						</div>
					</div>
				))}

				{cartItems.length !== 0 && (
					<div>
						<hr></hr>

						<div className="wrapper--total-price">
							<div className="total-price">
								<strong>Total Price</strong>
							</div>
							<div className="price-quanti">
								<strong>${totalPrice}</strong>
							</div>
						</div>

						<div className="checkout">
							<CompleteOrder />
						</div>
					</div>
				)}
			</div>
		</div>
	);
}

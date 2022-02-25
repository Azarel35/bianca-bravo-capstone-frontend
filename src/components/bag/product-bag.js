import React from 'react';

export default function ProductBag(props) {
	const { product, onAdd } = props;
	return (
		<div className="product-bag-item">
			<h3>{product.name}</h3>
			<div>${product.price}</div>
			<div>
				<button onClick={() => onAdd(product)}>Add To Bag</button>
			</div>
		</div>
	);
}

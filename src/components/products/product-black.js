import React from 'react';

const ProductBlack = (props) => {
	const dressBlack = props.data
		.filter((item) => item.id === 3)
		.map((item) => (
			<div key={item.id}>
				<h2>{item.name}</h2>
				<h3>{item.description}</h3>
				<h3>price: ${item.price}</h3>
			</div>
		));
	return <div>{dressBlack}</div>;
};

export default ProductBlack;

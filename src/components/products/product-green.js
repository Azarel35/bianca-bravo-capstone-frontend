import React from 'react';

const ProductGreen = (props) => {
	const dressGreen = props.data
		.filter((item) => item.id === 2)
		.map((item) => (
			<div key={item.id}>
				<h2>{item.name}</h2>
				<h3>{item.description}</h3>
				<h3>price: ${item.price}</h3>
			</div>
		));
	return <div>{dressGreen}</div>;
};

export default ProductGreen;

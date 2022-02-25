import React from 'react';

const ProductBlue = (props) => {
	const blouseBlue = props.data
		.filter((item) => item.id === 5)
		.map((item) => (
			<div key={item.id}>
				<h2>{item.name}</h2>
				<h3>{item.description}</h3>
				<h3>price: ${item.price}</h3>
			</div>
		));
	return <div>{blouseBlue}</div>;
};

export default ProductBlue;

import React from 'react';

const ProductWhite = (props) => {
	const blouseWhite = props.data
		.filter((item) => item.id === 4)
		.map((item) => (
			<div key={item.id}>
				<h2>{item.name}</h2>
				<h3>{item.description}</h3>
				<h3>price: ${item.price}</h3>
			</div>
		));
	return <div>{blouseWhite}</div>;
};

export default ProductWhite;

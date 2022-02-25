import React from 'react';

const ProductsJeans = (props) => {
	const panstJeans = props.data
		.filter((item) => item.id === 7)
		.map((item) => (
			<div key={item.id}>
				<h2>{item.name}</h2>
				<h3>{item.description}</h3>
				<h3>price: ${item.price}</h3>
			</div>
		));
	return <div>{panstJeans}</div>;
};

export default ProductsJeans;

import React from 'react';

const ProductBeige = (props) => {
	const panstBeige = props.data
		.filter((item) => item.id === 9)
		.map((item) => (
			<div key={item.id}>
				<h2>{item.name}</h2>
				<h3>{item.description}</h3>
				<h3>price: ${item.price}</h3>
			</div>
		));
	return <div>{panstBeige}</div>;
};

export default ProductBeige;

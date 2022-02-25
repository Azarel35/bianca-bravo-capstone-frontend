import React from 'react';
import ProductBag from './product-bag';

export default function BagItems(props) {
	const { products, onAdd } = props;
	return (
		<div className="wrapper-items">
			<div className="wrapper-items-bag">
				{products.map((product) => (
					<ProductBag
						key={product.id}
						product={product}
						onAdd={onAdd}
					></ProductBag>
				))}
			</div>
		</div>
	);
}

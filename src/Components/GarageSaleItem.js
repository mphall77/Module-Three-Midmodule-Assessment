import React from "react";

const GarageSaleItem = ({ product }) => {
	const { name, price, description, img } = product;
	return (
		<li>
			<h4>{name}</h4>
			<p>{price}</p>
			<button>Add To Cart</button>
			<img src={img} alt="Pic" />
			<p>{description}</p>
		</li>
	);
};
export default GarageSaleItem;

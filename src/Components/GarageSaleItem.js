import React from "react";

const GarageSaleItem = ({ product, addToCart }) => {
	const { name, price, description, img } = product;
	return (
		<li>
			<h4>{name}</h4>
			<p>Price: ${price.toFixed(2)}</p>
			<button onClick={()=> addToCart(product)}>Add To Cart</button>
			<img src={img} alt="Pic" />
			<p>{description}</p>
		</li>
	);
};
export default GarageSaleItem;

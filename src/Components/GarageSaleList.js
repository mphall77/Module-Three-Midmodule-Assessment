import React from "react";
import productData from "../data/productData";
import GarageSaleItem from "./GarageSaleItem.js";

const GarageSaleList = () => { 
        const products = productData.map((product) => {
            return <GarageSaleItem key={product.id} product={product} />;
        });

	return (
		<section>
			<h2>My Garage Sale</h2>
			<p>List of Garage Sale Items</p>
			<ul>{products}</ul>
		</section>
	);
};
export default GarageSaleList;

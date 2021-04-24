import React from "react";
import productData from "../data/productData";
import GarageSaleItem from "./GarageSaleItem.js";
import "./GarageSaleList.css";

const GarageSaleList = () => {
	const products = productData.map((product) => {
		return <GarageSaleItem key={product.id} product={product} />;
	});

	return (
		<section className="Products">
			<h2>My Garage Sale</h2>
			<ul>{products}</ul>
		</section>
	);
};
export default GarageSaleList;

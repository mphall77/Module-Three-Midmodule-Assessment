import React from "react";

const Cart = ({cart}) => {
	return (
		<section>
            <h3>Cart</h3>
            <ul>
                {cart.map(product => {
                    const { name, price, id } = product;
                    return <li key={id}>{name}: ${price.toFixed(2)}</li>
                })}
            </ul>
            <h3>Subtotal: $</h3>
            <h3>Tax: $</h3>
            <h3>Total: $</h3>
		</section>
	);
};
export default Cart;

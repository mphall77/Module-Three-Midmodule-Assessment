import React from "react";
import "./App.css";
import GarageSaleList from "./Components/GarageSaleList";
import Cart from "./Components/Cart";
import Checkout from "./Components/Checkout";

class App extends React.Component {
	state = { cart: [] };

	addToCart = (product) => {
		this.setState((prevState) => {
			return { cart: [...prevState.cart, product] };
		});
	};
	render() {
		const { cart } = this.state;
    let subTotal = 0;
    let tax = 0;
    let total = 0;
		cart.forEach((product) => {
      subTotal += product.price;
      tax += subTotal * 0.05;
      total = subTotal + tax;
		});
		return (
			<div className="App">
				<section className="Left">
					<GarageSaleList addToCart={this.addToCart} />
				</section>
				<section className="Right">
					<Cart cart={this.state.cart} subTotal={subTotal} tax={tax} total={total} />
					<Checkout />
				</section>
			</div>
		);
	}
}

export default App;

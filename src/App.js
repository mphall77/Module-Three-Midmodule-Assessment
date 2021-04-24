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
		return (
			<div className="App">
				<section className="Left">
					<GarageSaleList addToCart={this.addToCart} />
				</section>
				<section className="Right">
					<Cart cart={this.state.cart} />
					<Checkout />
				</section>
			</div>
		);
	}
}

export default App;

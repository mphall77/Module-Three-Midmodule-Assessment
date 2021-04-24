import React from "react";
import "./App.css";
import GarageSaleList from "./Components/GarageSaleList";
import Cart from "./Components/Cart";
import Checkout from "./Components/Checkout";

class App extends React.Component {
	render() {
		return (
			<div className="App">
				<GarageSaleList />
				<Cart />
				<Checkout />
			</div>
		);
	}
}

export default App;

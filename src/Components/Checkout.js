import React from "react";

class Checkout extends React.Component {
	render() {
		return (
			<section>
				<h3>Checkout</h3>
				<form>
					<label>
						First Name
						<input />
					</label>

					<label>
						Last Name
						<input />
					</label>

					<label>
						Email
						<input type="email"/>
					</label>

					<label>
						Credit Card
						<input />
					</label>

					<label>
						Zip Code
						<input />
					</label>
					<button>Buy Now</button>
				</form>
			</section>
		);
	}
}
export default Checkout
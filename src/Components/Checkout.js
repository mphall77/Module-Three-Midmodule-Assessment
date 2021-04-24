import React from "react";

class Checkout extends React.Component {
	state = {
		firstName: "",
		lastName: "",
		email: "",
		creditCard: "",
		zipCode: "",
	};

	handleChange = (e) => {
		const { name, value } = e.target;
		this.setState({ [name]: value });
	};

	handleSubmit = (e) => {
		e.preventDefault();
		const { firstName, lastName, email, zipCode, creditCard } = this.state;
		const { total } = this.props;
		// if form valid && click buy ==>
		if (!firstName || !lastName || !email) {
			window.alert(`Input is not valid`);
		} else if (creditCard.length !== 16) {
			window.alert(`Input is not valid. Credit card number is not valid`);
		} else if (zipCode.length !== 5) {
            window.alert(`Input is not valid. Zip code is not valid`);
		} else {
			window.alert(`Purchase complete. You will be charged $${total.toFixed(2)}`);
		}
	};

	render() {
		const { firstName, lastName, email, zipCode, creditCard } = this.state;
		return (
			<section>
				<h3>Checkout</h3>
				<form onSubmit={this.handleSubmit}>
					<label>
						First Name
						<input
							onChange={this.handleChange}
							name="firstName"
							value={firstName}
						/>
					</label>

					<label>
						Last Name
						<input
							onChange={this.handleChange}
							name="lastName"
							value={lastName}
						/>
					</label>

					<label>
						Email
						<input
							onChange={this.handleChange}
							name="email"
							type="email"
							value={email}
						/>
					</label>

					<label>
						Credit Card
						<input
							onChange={this.handleChange}
							name="creditCard"
							value={creditCard}
							type="tel"
							maxlength="16"
						/>
					</label>

					<label>
						Zip Code
						<input
							onChange={this.handleChange}
							name="zipCode"
							value={zipCode}
							type="tel"
						/>
					</label>
					<button onSubmit={this.handleSubmit}>Buy Now</button>
				</form>
			</section>
		);
	}
}
export default Checkout;

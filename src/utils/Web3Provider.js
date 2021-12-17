import React, { Component } from "react";
// import EventFactoryContract from "../contracts/EventFactory.json";
import getWeb3 from "./getWeb3";
import { Web3Context } from "./context";

export default class Web3Provider extends Component {
	state = {
		web3: null,
		accounts: null,
		contract: null,
		amount: null,
		provedor: null,
	};

	componentDidMount = async () => {
		try {
			// Get network provider and web3 instance.
			const web = await getWeb3();
			const web3 = web[0];
			const provedor = web[1];
			console.log(provedor);

			// const accounts = web[1];
			// const networkId = web[2];
			// console.log("cuenta", accounts);

			// const deployedNetwork = EventFactoryContract.networks[networkId];
			// const instance = new web3.eth.Contract(
			// 	EventFactoryContract.abi,
			// 	deployedNetwork && deployedNetwork.address
			// );

			// Set web3, accounts, and contract to the state, and then proceed with an
			// example of interacting with the contract's methods.
			this.setState({
				web3,
				// accounts,
				// contract: instance
				// amount,
				provedor,
			});
		} catch (error) {
			// Catch any errors for any of the above operations.
			alert(`Fallo en la carga de Web3, intente nuevamente`);
			console.error(error);
		}
	};
	render() {
		if (this.state.web3 != null) {
			return (
				<Web3Context.Provider value={this.state}>
					{this.props.children}
				</Web3Context.Provider>
			);
		} else {
			return <h1>loading web3...</h1>;
		}
	}
}

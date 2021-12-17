import React from "react";
import Routes from "./routes";
import Web3Provider from "./utils/Web3Provider";
import { HashRouter } from "react-router-dom";

const App = () => (
	<Web3Provider>
		<HashRouter>
			<Routes />
		</HashRouter>
	</Web3Provider>
);
export default App;

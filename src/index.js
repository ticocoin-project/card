import React from "react";
import ReactDOM from "react-dom";
//Boostrap Libs
import $ from "jquery";
import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";

//SBAdmin2 Style
import "./styles/scss/sb-admin-2.scss";

//Redux
import { Provider } from "react-redux";
import generateStore from "./redux/store";

import App from "./App";

const store = generateStore();

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
);

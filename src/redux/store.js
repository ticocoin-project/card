import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import tokenReducer from "./TokenDucks";
import MenuOpenReducer from "./PanelDucks";

const rootReducer = combineReducers({
	token: tokenReducer,
	panel: MenuOpenReducer,
});

export default function generateStore() {
	const store = createStore(
		rootReducer,
		composeWithDevTools(applyMiddleware(thunk))
	);
	return store;
}

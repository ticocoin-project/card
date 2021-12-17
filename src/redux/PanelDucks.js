// constantes
const dataInicial = {
	menuOpen: true,
};

// types
const CLICK_OPEN_MENU = "CLICK_OPEN_MENU";

// reducer
export default function MenuOpenReducer(state = dataInicial, action) {
	switch (action.type) {
		case CLICK_OPEN_MENU:
			return {
				...state,
				menuOpen: !state.menuOpen,
			};
		default:
			return state;
	}
}

// actions
export const clickMenuOpen = () => async (dispatch) => {
	dispatch({
		type: CLICK_OPEN_MENU,
	});
};

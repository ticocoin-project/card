// constantes
const dataInicial = {
	array: [],
};

// types
const GET_POKE_SUCCESS = "GET_POKE_SUCCESS";

// reducer
export default function tokenReducer(state = dataInicial, action) {
	switch (action.type) {
		case GET_POKE_SUCCESS:
			return { ...state, array: action.payload };
		default:
			return state;
	}
}

// actions
export const obtenerPokemonsAction = () => async (dispatch) => {};

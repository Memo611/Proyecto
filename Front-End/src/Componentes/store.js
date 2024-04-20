import { createStore } from 'redux';

const initialState = {
    contador: 0
};

const reducers = (state = initialState, action) => {
    // Reducers para manejar las acciones
    switch (action.type) {
        case 'INCREMENTAR_CONTADOR':
            return { ...state, contador: state.contador + 1 };
        case 'DECREMENTAR_CONTADOR':
            return { ...state, contador: state.contador - 1 };
        default:
            return state;
    }
};

const store = createStore(reducers);

export default store;
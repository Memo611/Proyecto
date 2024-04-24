import { createStore } from 'redux';

// Define el estado inicial
const initialState = {
    titulo: '',
    cuerpo: '',
};

// Crea una función reductor para manejar actualizaciones de estado
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ACTUALIZAR_TITULO':
            return { ...state, titulo: action.payload };
        case 'ACTUALIZAR_CUERPO':
            return { ...state, cuerpo: action.payload };
        default:
            return state;
    }
};

const store = createStore(reducer);

export default store;
import { createStore } from 'redux';

<<<<<<< HEAD
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
=======
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
>>>>>>> 8b9aec4b47e74a74cc27547d4874c0bb2bf52c42
        default:
            return state;
    }
};

<<<<<<< HEAD
const store = createStore(reducers);
=======
const store = createStore(reducer);
>>>>>>> 8b9aec4b47e74a74cc27547d4874c0bb2bf52c42

export default store;
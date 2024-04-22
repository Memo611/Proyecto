import { createStore } from 'redux';

const initialState = {
    formularioAbierto: false,
    tablaAbierta: true,
    personaNombre: "Nombre:",
    // Agrega aquí otros estados que necesites administrar
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ABRIR_FORMULARIO':
            return { ...state, formularioAbierto: true, tablaAbierta: false };
        case 'CERRAR_FORMULARIO':
            return { ...state, formularioAbierto: false, tablaAbierta: true };
        // Agrega aquí casos para otras acciones que quieras manejar
        default:
            return state;
    }
};

const store = createStore(reducer);

export default store;
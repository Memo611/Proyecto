<<<<<<< HEAD
export const incrementarContador = () => {
    return {
        type: 'INCREMENTAR_CONTADOR'
    };
};

export const decrementarContador = () => {
    return {
        type: 'DECREMENTAR_CONTADOR'
=======
export const agregarTitulo = (titulo) => {
    return {
        type: 'AGREGAR_TITULO',
        titulo
    };
};

export const eliminarTitulo = (id) => {
    return {
        type: 'ELIMINAR_Titulo',
        id
>>>>>>> 8b9aec4b47e74a74cc27547d4874c0bb2bf52c42
    };
};
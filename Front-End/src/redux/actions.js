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
    };
};
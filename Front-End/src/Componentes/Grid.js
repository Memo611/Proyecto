import MUIDataTable from "mui-datatables";
import { Button } from 'react-bootstrap';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import React from "react";
import { useEffect } from "react";
import './PrimerFormulario.css';
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../redux/actions";

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

// Función para devolver "SI" o "NO" en la tabla según el estado del usuario
const customBodyRender = (valor) => {
    return valor ? "SI" : "NO";
};

// Definimos las columnas
const columns = [
    { name: "idUsuario", label: "ID de Usuario" },
    { name: "nombre", label: "Nombre" },
    { name: "primerApellido", label: "Primer Apellido" },
    { name: "segundoApellido", label: "Segundo Apellido" },
    { name: "nombreUsuario", label: "Nombre de Usuario" },
    { name: "contraseña", label: "Contraseña" },
    {
        name: "habilitado",
        label: "Estado",
        options: {
            customBodyRender,
        },
    },
    { name: "nombreCompleto", label: "Nombre Completo" },
    { name: "strFechaNacimiento", label: "Fecha de Nacimiento" },
];

const options = {
    filterType: 'checkbox',
};

export default function Grid({ settable }) {
    const dispatch = useDispatch();
    const { usuarios } = useSelector((state) => state.getUsers); // Suponemos que está en users

    useEffect(() => {
        dispatch(getUsers());
    }, [dispatch])

    // Renderizamos la Tabla
    return (
        <>
            <div className="Botones">
                <Button className="NewUser" variant="primary" onClick={settable}>Nuevo Usuario</Button>
                <Button className="NewUser" variant="warning" onClick={settable}>Editar</Button>
                <Button className="NewUser" variant="danger" onClick={0}>Eliminar</Button>
            </div>
            {usuarios && usuarios.data ? (
                <ThemeProvider theme={darkTheme}>
                    <MUIDataTable
                        title={"Lista de Usuarios"}
                        data={usuarios}
                        columns={columns}
                        options={options}
                    />
                </ThemeProvider>
            ) : (<p>Cargando datos...</p>)}
        </>
    );
}


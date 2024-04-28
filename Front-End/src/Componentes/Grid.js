import MUIDataTable from "mui-datatables";
import { Button } from 'react-bootstrap';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import React, { useEffect, useState, useRef } from "react";
import './PrimerFormulario.css';
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../redux/actions";


function Grid({ showForm }) {
    const dispatch = useDispatch();
    const { users } = useSelector((state) => state.getUsers); // Acceder a los datos del usuario
    const [showPassword, setShowPassword] = useState(false);
    const tableRef = useRef(null); // Referencia a la tabla MUIDataTable

    useEffect(() => {
        dispatch(getUsers());
    }, [dispatch]);

    const darkTheme = createTheme({
        palette: {
            mode: 'dark',
        },
    });

    // Función para devolver asteriscos o la contraseña en la tabla
    // Función para devolver "SI" o "NO" en la tabla según el estado del usuario
    const customBodyRender = (valor, tableMeta) => {
        const rowId = tableMeta.rowData.idUsuario; // Obtener el ID de la fila
        return (
            <div>
                {showPassword[rowId] ? valor : "********"}
                <Button
                    variant="outline-primary"
                    size="sm"
                    onClick={() => {
                        setShowPassword((prevState) => ({
                            ...prevState,
                            [rowId]: !prevState[rowId],
                        }));
                    }}
                >
                    {showPassword[rowId] ? "Ocultar" : "Ver"}
                </Button>
            </div>
        );
    };

    // Definimos las columnas
    const columns = [
        { name: "idUsuario", label: "ID de Usuario" },
        { name: "nombre", label: "Nombre" },
        { name: "primerApellido", label: "Primer Apellido" },
        { name: "segundoApellido", label: "Segundo Apellido" },
        { name: "nombreUsuario", label: "Nombre de Usuario" },
        {
            name: "contraseña",
            label: "Contraseña",
            options: {
                customBodyRender,
            },
        },
        {
            name: "habilitado",
            label: "Estado",
            options: {
                customBodyRender: (valor) => {
                    return valor ? "SI" : "NO";
                }
            },
        },
        { name: "nombreCompleto", label: "Nombre Completo" },
        { name: "strFechaNacimiento", label: "Fecha de Nacimiento" },
    ];

    const options = {
        filterType: 'checkbox',
        selectableRows: "auto", // Habilita la selección de filas
        onRowSelectionChange: (selectedRows) => {
            const selectedRowIds = selectedRows.map((row) => row.idUsuario);
            // Actualizar el estado de visibilidad de las contraseñas para las filas seleccionadas
            setShowPassword((prevState) => ({
                ...prevState,
                ...selectedRowIds.reduce((acc, id) => {
                    acc[id] = true;
                    return acc;
                }, {}),
            }));
        },
    };

    // Renderizamos la Tabla
    return (
        <>
            <div className="Botones">
                <Button className="NewUser" variant="primary" onClick={showForm}>Nuevo</Button>
                <Button className="NewUser" variant="warning" onClick={showForm}>Editar</Button>
                <Button className="NewUser" variant="danger" >Eliminar</Button>
            </div>
            <ThemeProvider theme={darkTheme}>
                <MUIDataTable
                    title={"Lista de Usuarios"}
                    data={users}
                    columns={columns}
                    options={options}
                    ref={tableRef}
                />
            </ThemeProvider>

        </>
    );
}
export default Grid;
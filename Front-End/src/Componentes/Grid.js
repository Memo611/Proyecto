import MUIDataTable from "mui-datatables";
import { Button } from 'react-bootstrap';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import React, { useEffect, useState, useRef } from "react";
import './PrimerFormulario.css';
import { useDispatch, useSelector } from "react-redux";
import { getUsers,deleteUser } from "../redux/actions";

const DATA_ITEM_KEY = "idUsuario";
const SELECTED_FIELD = "selected";
const idGetter = getter(DATA_ITEM_KEY);

function Grid({ showForm, idUserEdit}) {
    const dispatch = useDispatch();
    const { users } = useSelector((state) => state.getUsers); // Acceder a los datos del usuario
    const [showPassword, setShowPassword] = useState(false);
    const [userSelected, setUserSelected] = React.useState(false);
    const [selectedState, setSelectedState] = React.useState({});
    const tableRef = useRef(null); // Referencia a la tabla MUIDataTable


    const darkTheme = createTheme({
        palette: {
            mode: 'dark',
        },
    });
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
                    return valor ? "ACTIVO" : "DESACTIVADO";
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
    const onSelectionChange = (event) => {
        const newSelectedState = getSelectedState({
        event,
        selectedState: selectedState,
        dataItemKey: DATA_ITEM_KEY,
        });
        setSelectedState(newSelectedState);
        setUserSelected(true);
        idUserEdit(Object.keys(newSelectedState)[0]);
    };

    const onKeyDown = (event) => {
        const newSelectedState = getSelectedStateFromKeyDown({
        event,
        selectedState: selectedState,
        dataItemKey: DATA_ITEM_KEY,
        });
        setSelectedState(newSelectedState);
    };

    React.useEffect(() => {
        dispatch(getUsers());
        if (users) {
            users.map((dataItem) =>
                Object.assign(
                    {
                        selected: false,
                    },
                    dataItem
                )
            );
        }
    }, [dispatch]);

    const handleNew = () => {
        showForm();
        idUserEdit(0);
    };

    const handleEdit = () => {
        if (userSelected) {
            showForm();
        } else {
            alert('Seleccione un usuario para modificar');
        }
    };

    const handleDelete = () => {
        if (userSelected) {
            // Eliminar usuario seleccionado
            const idUserDelete = Object.keys(selectedState)[0];
            dispatch(deleteUser(idUserDelete));
        } else {
            alert("Seleccione un usuario para eliminar");
        }
    };

    // Renderizamos la Tabla
    return (
        <>
            <div className="Botones">
                <Button className="NewUser" variant="primary" onClick={handleNew}>Nuevo</Button>
                <Button className="NewUser" variant="warning" onClick={handleEdit}>Editar</Button>
                <Button className="NewUser" variant="danger" onClick={handleDelete}>Eliminar</Button>
            </div>
            <ThemeProvider theme={darkTheme}>
                <MUIDataTable
                    title={"Lista de Usuarios"}
                    data={users}
                    columns={columns}
                    options={options}
                    ref={tableRef}
                    dataItemKey={DATA_ITEM_KEY}
                    selectedField={SELECTED_FIELD}
                    onSelectionChange={onSelectionChange}
                    onKeyDown={onKeyDown}
                />
            </ThemeProvider>

        </>
    );
}
export default Grid;
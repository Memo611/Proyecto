import MUIDataTable from "mui-datatables";
import { Button } from 'react-bootstrap';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import React, { useEffect, useRef } from "react";
import './PrimerFormulario.css';
import { useDispatch, useSelector } from "react-redux";
import { getUsers, deleteUser } from "../redux/actions";
import Swal from 'sweetalert2';

function Grid({ showForm, idUserEdit }) {
    const dispatch = useDispatch();
    const { users } = useSelector((state) => state.getUsers); // Acceder a los datos del usuario
    const [userSelected, setUserSelected] = React.useState(false);
    const [selectedRowIds, setSelectedRowIds] = React.useState([]);
    const tableRef = useRef(null); // Referencia a la tabla MUIDataTable

    const darkTheme = createTheme({
        palette: {
            mode: 'dark',
        },
    });


    // Definir las columnas de la tabla
    const columns = [
        { name: "idUsuario", label: "ID de Usuario" },
        { name: "nombre", label: "Nombre" },
        { name: "primerApellido", label: "Primer Apellido" },
        { name: "segundoApellido", label: "Segundo Apellido" },
        { name: "nombreUsuario", label: "Nombre de Usuario" },
        {
            name: "contraseña", label: "Contraseña",
        },
        {
            name: "habilitado",
            label: "Estado",
            options: {
                customBodyRender: (valor) => {
                    return valor ? "ACTIVO" : "DESACTIVADO";
                },
            },
        },
        { name: "nombreCompleto", label: "Nombre Completo" },
        { name: "strFechaNacimiento", label: "Fecha de Nacimiento" },
    ];

    const options = {
        filterType: 'checkbox',
    };

    const onSelectionChange = (event) => {
        const selectedRows = event.data.selectedRows;
        // Actualiza selectedRowIds con los IDs de las filas seleccionadas
        setSelectedRowIds(selectedRows.map((row) => row.idUsuario));
        setUserSelected(selectedRows.length > 0); // Establece userSelected en true si hay filas seleccionadas
        if (selectedRows.length > 0) {
            idUserEdit(selectedRows[0].idUsuario); // Establece el ID del usuario para editar (asumiendo que solo se puede editar un usuario a la vez)
        }
    };

    useEffect(() => {
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
        showForm(); // Suponiendo que `showForm` está definida y abre el formulario para crear un nuevo usuario
        idUserEdit(0); // Establecer el ID de usuario a 0 para indicar un nuevo usuario
    };

    const handleEdit = () => {
        if (userSelected) {
            showForm(); // Abrir formulario para editar
        } else {
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "Seleccione un usuario para editar",
            });
        }
    };

    const handleDelete = () => {
        if (userSelected) {
            const idUserDelete = selectedRowIds[0]; // Usa el primer ID de selectedRowIds para eliminar
            dispatch(deleteUser(idUserDelete)).then(() => {
                Swal.fire({
                    icon: "success",
                    title: "Usuario eliminado",
                    showConfirmButton: false,
                    timer: 1500,
                }).then(() => {
                    dispatch(getUsers());
                });
            });
        } else {
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "Seleccione un usuario para eliminar",
            });
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
                    selectable={{
                        enabled: true,
                        drag: true,
                        mode: "single",
                    }}
                    onSelectionChange={onSelectionChange}
                />
            </ThemeProvider>
        </>
    );
}

export default Grid;
import { useState, useEffect } from "react";
import MUIDataTable from "mui-datatables";
import { createTheme, ThemeProvider } from "@mui/material/styles"
import React from "react";
import axios from "axios";
import { Button, Toolbar } from "@mui/material"; // Importar componentes Button y Toolbar
import './PrimerFormulario.css'
import PrimerFormulario from "./PrimerFormulario";
const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    }
})

export const Grid = () => {
    // configurar los hooks
    const [products, SetProducts] = useState([])
    //Funcion para mostrat los datos con axios
    const endpoint = 'https://jsonplaceholder.typicode.com/posts'

    const getDatos = async () => {
        await axios.get(endpoint).then((response) => {
            const data = response.data
            console.log(data)
            SetProducts(data)
        })
    }
    useEffect(() => {
        getDatos()
    }, [])

    //Definimos las columnas
    const columns = [
        { name: "userId", label: "UserID" },
        { name: "Id", label: "ID" },
        { name: "title", label: "Titulo" },
        { name: "body", label: "Cuerpo" },
        
    ]
    const handleEdit = (rowData) => {
        // Maneja la lógica de edición aquí
        console.log("Edición solicitada para la fila:", rowData);
        // Puedes abrir un modal, navegar a un formulario de edición, etc.
        const openEditForm = () => {
            // Abrir modal del formulario o navegar a la página de edición
            // Pasar rowData como props a PrimerFormulario (opcional)
        };
    };
    //agregamos opciones
    const options = {
        filterType: 'checkbox'
    }

    //Renderizamos la Tabla
    return (
        <ThemeProvider theme={darkTheme}>
            
                <Toolbar className={PrimerFormulario.MuiToolbarRoot}>
                    <Button variant="primary" onClick={handleEdit}>
                        Editar
                    </Button>
                </Toolbar>
                <MUIDataTable
                    title={"Lista de Usuarios"}
                    data={products}
                    columns={columns}
                    options={options}
                />
            
        </ThemeProvider>
    );
};

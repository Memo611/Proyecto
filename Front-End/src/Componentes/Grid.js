import { useState, useEffect } from "react";
import MUIDataTable from "mui-datatables";
import { createTheme, ThemeProvider } from "@mui/material/styles"
import React from "react";
import axios from "axios";
import './PrimerFormulario.css'

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    }
})

export const Grid = () => {
    // configurar los hooks
    const [products, SetProducts] = useState([])
    //Funcion para mostrat los datos con axios
<<<<<<< HEAD
    const endpoint = 'http://187.189.158.186:7777/Usuario'
    
    const getDatos =  async() =>{
        await axios.get(endpoint).then((response)=>{
=======
    const endpoint = 'https://jsonplaceholder.typicode.com/posts'

    const getDatos = async () => {
        await axios.get(endpoint).then((response) => {
>>>>>>> 8b9aec4b47e74a74cc27547d4874c0bb2bf52c42
            const data = response.data
            console.log(data)
            SetProducts(data)
        })
    }
    useEffect(() => {
        getDatos()
    }, [])

    //Definimos las columnas
<<<<<<< HEAD
    const columns =[
        {name:"idUsuario", label:"UserID"},
        {name:"nombre", label:"Nombre"},
        {name:"primerApellido", label:"Primer Apellido"},
        {name:"segundoApellido", label:"Segundo apellido"},
        {name:"nombreUsuario", label:"Nombre de Usuario"},
        {name:"contraseña", label:"Contraseña"},
        {name:"habilitado", label:"Estado"},
        {name:"nombreCompleto", label:"Nombre completo"},
        {name:"strFechaNacimiento", label:"Fecha de Nacimiento"},
=======
    const columns = [
        { name: "userId", label: "UserID" },
        { name: "Id", label: "ID" },
        { name: "title", label: "Titulo" },
        { name: "body", label: "Cuerpo" },
>>>>>>> 8b9aec4b47e74a74cc27547d4874c0bb2bf52c42
    ]
    const options = {
        filterType: 'checkbox'
    }

    //Renderizamos la Tabla
    return (
        <ThemeProvider theme={darkTheme}>      
                <MUIDataTable
                    title={"Lista de Usuarios"}
                    data={products}
                    columns={columns}
                    options={options}
                />
        </ThemeProvider>
    );
};

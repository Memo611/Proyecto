import { useState, useEffect} from "react";
import MUIDataTable from "mui-datatables";
import {createTheme, ThemeProvider} from "@mui/material/styles"
import React from "react";
import axios from "axios";
import { useSelector, useDispatch } from 'react-redux';

const darkTheme = createTheme({
    palette:{
        mode: 'dark',
    }
})

export const Grid = () =>{
    // configurar los hooks
    const [products, SetProducts] = useState([])
    //Funcion para mostrat los datos con axios
    const endpoint = 'http://187.189.158.186:7777/Usuario'
    
    const getDatos =  async() =>{
        await axios.get(endpoint).then((response)=>{
            const data = response.data
            console.log(data)
            SetProducts(data)
        })
    }
    useEffect(()=>{
        getDatos()
    },[])

    //Definimos las columnas
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
    ]

    //agregamos opciones
    const options={
        filterType:'checkbox'
    }

    //Renderizamos la Tabla
    return(
        <ThemeProvider theme={darkTheme}>
        <MUIDataTable
            title={"Lista de Usuarios"}
            data={products}
            columns={columns}
            options={options}
        />
        </ThemeProvider>
    )
}


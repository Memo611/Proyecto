import { useState, useEffect} from "react";
import MUIDataTable from "mui-datatables";
import {createTheme, ThemeProvider} from "@mui/material/styles"
import React from "react";
import axios from "axios";

const darkTheme = createTheme({
    palette:{
        mode: 'dark',
    }
})

export const Grid = () =>{
    // configurar los hooks
    const [products, SetProducts] = useState([])
    //Funcion para mostrat los datos con axios
    const endpoint = 'https://jsonplaceholder.typicode.com/posts'
    
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
        {name:"userId", label:"UserID"},
        {name:"Id", label:"ID"},
        {name:"title", label:"Titulo"},
        {name:"body", label:"Cuerpo"},
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


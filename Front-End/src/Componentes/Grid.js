import MUIDataTable from "mui-datatables";
import {createTheme, ThemeProvider} from "@mui/material/styles"
import users from './usuarios.json';
import React from "react";

const darkTheme = createTheme({
    palette:{
        mode: 'dark',
    }
})

export class Grid extends React.Component{
    render(){
        const columns =[
            {name:"id", label:"ID"},
            {name:"Nombre", label:"Nombre"},
            {name:"PrimerApellido", label:"PrimerApellido"},
            {name:"SegundoApellido", label:"SegundoApellido"},
            {name:"Correo", label:"Correo"},
            {name:"Telefono", label:"Telefono"},
            {name:"NombredeUsuario",label:"NombredeUsuario"}
        ]
        
        const options={
            filterType:'checkbox'
        }

        return(
            <ThemeProvider theme={darkTheme}>
            <MUIDataTable
                title={"Lista de Usuarios"}
                data={users}
                columns={columns}
                options={options}
            />
            </ThemeProvider>
        )
    }
};

export default Grid;

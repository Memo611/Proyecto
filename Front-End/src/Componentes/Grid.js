import MUIDataTable from 'mui-datatables';
import usuarios from './usuarios.json';

const columnas = [
    {   
        title:'ID',
        field:'id'
    },
    {   
        title:'Nombre',
        field:'Nombre'
    },
    {   
        title:'Primer Apellido',
        field:'PrimerApellido'
    },
    {   
        title:'Segundo Apellido',
        field:'SegundoApellido'
    },
    {   
        title:'Correo',
        field:'Correo'
    },
    {   
        title:'Telefono',
        field:'Telefono',
    },
    {   
        title:'Nombre de Usuario',
        field:'NombredeUsuario'
    },
]

export default function Grid(){
    return(
        <MUIDataTable
            field = {'Usuarios'}
            data={usuarios}
            columns={columnas}
        />    
    )
}
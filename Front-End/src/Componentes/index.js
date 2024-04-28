import React, { useState } from 'react';
import PrimerFormulario from './PrimerFormulario';
import Grid from './Grid';

function Usuarios() {
    const [showForm, setShowForm] = useState(false);
    const [idUserEdit, setUserEdit] = useState(0);
    const showTable = () => {
        setShowForm(prevShowForm => !prevShowForm); // Utilizando el estado anterior
    };
    function FunctionUserEdit(idUser){
        setUserEdit(idUser);
    }

    return (
        showForm ? (
            <PrimerFormulario showForm={showTable} idUserEdit={idUserEdit}/>
        ) : (
            <Grid showForm={showTable} idUserEdit={(id) => FunctionUserEdit(id)}/>
        )
    );
}

export default Usuarios;
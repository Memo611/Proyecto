import React, { useState, useEffect} from 'react';
import { useDispatch } from "react-redux";
import PrimerFormulario from './PrimerFormulario';
import Grid from './Grid';

function Usuarios() {
    const dispatch = useDispatch();
    const [showForm, setShowForm] = useState(false);
    const [idUserEdit, setUserEdit] = useState(0);

    const showTable = () => {
        setShowForm(prevShowForm => !prevShowForm); // Utilizando el estado anterior
        if (showForm) {
            setUserEdit(idUserEdit);
        }
    };

    useEffect(() => {

    }, [dispatch, idUserEdit]);

    return (
        showForm ? (
            <PrimerFormulario showForm={showTable} id={idUserEdit} />
        ) : (
            <Grid showForm={showTable} idUserEdit={id => setUserEdit(id)} />
        )
    );
}

export default Usuarios;
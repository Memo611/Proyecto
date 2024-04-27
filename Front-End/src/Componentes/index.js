import React, { useState } from 'react';
import PrimerFormulario from './PrimerFormulario';
import Grid from './Grid';

function UserIndex() {
    const [showform, setshowform] = useState(true);
    function chvalue() {
        setshowform(!showform);
    }
    return (
        showform ?
            (<Grid settable={chvalue}/>)
            : (<PrimerFormulario setform={chvalue}/>)
    );
}




export default UserIndex;
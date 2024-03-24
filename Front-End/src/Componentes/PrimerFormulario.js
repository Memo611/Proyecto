import React, { useState } from 'react';
import "./PrimerFormulario.css"
function PrimerFormulario(){
    const [datosFormulario, setDatosFormulario] = useState({
        nombre: '',
        primerApellido: '',
        segundoApellido: '',
        nombreUsuario: '',
        contraseña: '',
        confirmarContraseña: '',
    });
    const manejarCambio = (evento) => {
        setDatosFormulario({ ...datosFormulario, [evento.target.name]: evento.target.value });
    };
    
    const enviarFormulario = (evento) => {
        evento.preventDefault();
        // Envía los datos del formulario aquí
        console.log(datosFormulario);
    };
    
    return (
        <form onSubmit={enviarFormulario}>
            <fieldset>
            <label for="name">
                Nombre:
                <input  id="name"type="text" name="nombre" value={datosFormulario.nombre} onChange={manejarCambio} />
            </label>
            <label for="primerApellido">
                Primer Apellido:
                <input id="primerApellido" type="text" name="primerApellido" value={datosFormulario.primerApellido} onChange={manejarCambio} />
            </label>
            <label for="segundoApellido">
                Segundo Apellido:
                <input id="segundoApellido" type="text" name="segundoApellido" value={datosFormulario.segundoApellido} onChange={manejarCambio} />
            </label>
            <label for="nombreUsuario">
                Nombre de Usuario:
                <input id="nombreUsuario" type="text" name="nombreUsuario" value={datosFormulario.nombreUsuario} onChange={manejarCambio} />
            </label>
            <label for="contraseña">
                Contraseña:
                <input id="contraseña" type="password" name="contraseña" value={datosFormulario.contraseña} onChange={manejarCambio} />
            </label>
            <label for="confirmarContraseña">
                Confirmar Contraseña:
                <input id="confirmarContraseña" type="password" name="confirmarContraseña" value={datosFormulario.confirmarContraseña} onChange={manejarCambio} />
            </label>
        </fieldset>
        <fieldset>
            <button type="submit">Guardar</button>
        </fieldset>
        </form>
    );
}
export default PrimerFormulario;
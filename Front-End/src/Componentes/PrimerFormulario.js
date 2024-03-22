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
            <label>
                Nombre:
                <input type="text" name="nombre" value={datosFormulario.nombre} onChange={manejarCambio} />
            </label>
            <label>
                Primer Apellido:
                <input type="text" name="primerApellido" value={datosFormulario.primerApellido} onChange={manejarCambio} />
            </label>
            <label>
                Segundo Apellido:
                <input type="text" name="segundoApellido" value={datosFormulario.segundoApellido} onChange={manejarCambio} />
            </label>
            <label>
                Nombre de Usuario:
                <input type="text" name="nombreUsuario" value={datosFormulario.nombreUsuario} onChange={manejarCambio} />
            </label>
            <label>
                Contraseña:
                <input type="password" name="contraseña" value={datosFormulario.contraseña} onChange={manejarCambio} />
            </label>
            <label>
                Confirmar Contraseña:
                <input type="password" name="confirmarContraseña" value={datosFormulario.confirmarContraseña} onChange={manejarCambio} />
            </label>
        </fieldset>
        <fieldset>
            <button type="submit">Guardar</button>
        </fieldset>
        </form>
    );
}
export default PrimerFormulario;
import spiderman from './spiderman-homecoming.svg'; //Importacion de LOGO
import './App.css';  //Importacion de Diseño CSS
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import PrimerFormulario from './Componentes/PrimerFormulario.js'; //Importacion de Formulario
import { Button, Col, Row } from 'react-bootstrap';
import { Grid }from './Componentes/Grid.js';  //Importacion de Tabla
import React from 'react';


function App() {
  const [personaNombre] = useState("Nombre:");
  const [formularioAbierto, setFormularioAbierto] = useState(false);  //Variable constante para abrir y cerrar formulario con false/true
  const [tablaabierta, setTablaAbierta] = useState(true);
  
  const abrirFormulario = () => {
    setFormularioAbierto(true);
    setTablaAbierta(false);
  };

  const handleCloseFormulario = () => {
    setFormularioAbierto(false);
    setTablaAbierta(true)
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={spiderman} className="App-logo" alt="logo" />
      </header>

      <body>
        {tablaabierta && (
          <div className="Grid">
          <Button className="NewUser" onClick={abrirFormulario}>Nuevo Titulo</Button> 
          <Grid className="tabla" /> 
          </div>
        )}
          {formularioAbierto && (   /* Condicion para verificar el estado de formularioAbierto*/
            <div className="Form">
              <Row className="justify-content-center">
                <Col sm={10}>
                  <PrimerFormulario //Definicion del formulario
                    personaNombre={personaNombre} 
                    onCloseFormulario={handleCloseFormulario} // propiedad para cerrar el formulario haciendo prop a el archivo PrimerFomulario
                  />
                </Col>
              </Row>
            </div>
          )}
      </body>
    </div>
  );
}

export default App;

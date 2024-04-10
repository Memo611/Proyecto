import spiderman from './spiderman-homecoming.svg';
import './App.css';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import PrimerFormulario from './Componentes/PrimerFormulario.js';
import { Button, Col, Row } from 'react-bootstrap';
import Grid from './Componentes/Grid.js';

function App() {
  const [personaNombre] = useState("Nombre:");
  const [formularioAbierto, setFormularioAbierto] = useState(false);

  const abrirFormulario = () => {
    setFormularioAbierto(true);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={spiderman} className="App-logo" alt="logo" />
      </header>

      <body>
        <div className="Grid">
          <Grid className="tabla" /> {/* Renderiza tu componente Grid personalizado */}
          <Button className="NewUser" onClick={abrirFormulario}>Nuevo Usuario</Button>
          {formularioAbierto && (
            <div className="Form">
              <Row className="justify-content-center">
                <Col sm={10}>
                  <PrimerFormulario personaNombre={personaNombre} />
                </Col>
              </Row>
            </div>
          )}
        </div>
      </body>
    </div>
  );
}

export default App;
export { setFormularioAbierto }; // Exportar la función

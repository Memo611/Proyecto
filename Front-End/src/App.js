import spiderman from './spiderman-homecoming.svg';
import './App.css';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import PrimerFormulario from './Componentes/PrimerFormulario';
import { Col,Row } from 'react-bootstrap';

function App() {
  const[personaNombre] = useState("Nombre:")
  return (
    <div className="App">

      <header className="App-header">

        <img src={spiderman} className="App-logo" alt="logo" />

      </header>
      <body>
        <div className='Form'>
        </div>
        <Row className='justify-content-center'>
          <Col sm={10}>
            <PrimerFormulario personaNombre={personaNombre}/>
          </Col>
        </Row>
      </body>
    </div>
  );
}

export default App;

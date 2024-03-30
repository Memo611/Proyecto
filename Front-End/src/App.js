import spiderman from './spiderman-homecoming.svg';
import './App.css';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import PrimerFormulario from './Componentes/PrimerFormulario';
import { Col,Row } from 'react-bootstrap';
import Grid from './Componentes/Grid';

function App() {
  const[personaNombre] = useState("Nombre:");

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

        <div className='Grid'>
            <row>
              <Grid></Grid>
            </row>
        </div>

      </body>
    </div>
  );
}

export default App;

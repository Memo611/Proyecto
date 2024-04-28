import spiderman from './spiderman-homecoming.svg'; //Importacion de LOGO
import './App.css';  //Importacion de Diseño CSS
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Col, Row } from 'react-bootstrap';
import Usuarios from './Componentes/index.js';
import React from 'react';


function App() {


  return (
    <div className="App" >
      <header className="App-header">
        <img src={spiderman} className="App-logo" alt="fam" />
      <br></br>     
      </header>
      <Row className='justify-content-center'>
        <Col sm={10}>
        <Usuarios />
        </Col>
      </Row>
    </div>
    
  );
}
export default App;

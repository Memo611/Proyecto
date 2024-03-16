import spiderman from './spiderman-homecoming.svg';
import './App.css';
import  Button  from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={spiderman} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

      <Form.Label>Nombre: </Form.Label>
      <Form.Control type="text"></Form.Control>
      <Button variant="primary">Guardar</Button>
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

import spiderman from './spiderman-homecoming.svg';
import './App.css';
import { useState } from 'react';
import PrimerFormulario from './Componentes/PrimerFormulario';

function App() {
  const[personaNombre, setPersona] = useState("Nombre:")
  return (
    <div className="App">
      <header className="App-header">
        <img src={spiderman} className="App-logo" alt="logo" />
        <PrimerFormulario personaNombre={personaNombre}/>
      </header>
    </div>
  );
}

export default App;

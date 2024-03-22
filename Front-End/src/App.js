import spiderman from './spiderman-homecoming.svg';
import './App.css';
import { useState } from 'react';
import PrimerFormulario from './Componentes/PrimerFormulario';

function App() {
  const[personaNombre] = useState("Nombre:")
  return (
    <div className="App">
      <header className="App-header">
        <img src={spiderman} className="App-logo" alt="logo" />
      </header>
      <body>
        <div className='Form'>
        <fieldset>
          <label>Registro de Usuario</label>
        </fieldset>
          <PrimerFormulario personaNombre={personaNombre}/>
        </div>
      </body>
    </div>
  );
}

export default App;

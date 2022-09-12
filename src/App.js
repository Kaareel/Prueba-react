import Icono from './componentes/Icono';
import Header from './componentes/Header';
import Buscador from './componentes/Buscador';
import MiApi from './MiApi'
import Filtro from './componentes/Filtro'
import 'bootstrap-icons/font/bootstrap-icons.css'

import { useState, useEffect } from 'react'

function App() {
  const [value, setValue] = useState ("")
  const [role, setRole] = useState ("")

  return (
    <div className="App">
      <div className='inicio'>
        <Icono img="https://seeklogo.com/images/V/valorant-logo-FAB2CA0E55-seeklogo.com.png" alt='agentes' />
        <Header titulo="Agentes" />
        <Buscador placeholder= "Nombre de tu agente" value={value} onChange={setValue} />
      </div>
      <div className='Tabla'>
        <Filtro subtitulo="Filtro" onChange={setRole}/>
        <MiApi value={value} role={role} />

      </div>
    </div>
  );
}

export default App;

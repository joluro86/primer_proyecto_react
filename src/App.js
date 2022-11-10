import React from 'react'
import Contador from './components/Contador';
import Evento from './components/Evento';
import Parrafo from './components/Parrafo';
import Variables from './components/Variables';
function App() {
  return (
    <div>
      <h1>Hola Mundo</h1>
      <Parrafo/>
      <Variables/>
      <Evento/>
      <Contador/>
    </div>
  );
}

export default App;

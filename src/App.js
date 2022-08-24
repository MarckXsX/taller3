import logo from './logo.svg';
import './App.css';
import Welcome from './Componentes/Welcome'; //solo lectura
import Bienvenido from './Componentes/Bienvenido';
import React from 'react';


const datos={
  name: 'Marco Gerardo Serrano Lopez',
  carrera: 'Ing. Ciencias de la Computacion',
  skill: 'Base de datos y Programacion'
  
}

function App() {
  return (
    <div className="App">
     <Welcome{...datos}></Welcome>
    </div>
  );
}
export default App;

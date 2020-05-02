import React from 'react';
import logo from './assets/images/logo.svg';
import './assets/css/App.css';
// importar componentes
import MiComponente from './components/MiComponente'

function HolaMundo(nombre, edad){

  var presentacion =(
    <div>
        <h2>Hola soy, {nombre}</h2>
        <h3>y tengo {edad} de edad</h3>
    </div>
  );
return presentacion;
}

function App() {

  var nombre = "francisco granados";




  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Bienvenido al curso de reactjs de francisco granados
        </p>

{HolaMundo(nombre, 27)}
<section className="componentes">
  <section className="componentes">
    <MiComponente />
  </section>
</section>


      </header>




    </div>
  );
}

export default App;

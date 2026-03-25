import { useState } from 'react';
import './App.css';

import T1_Exercici1 from './assets/componentes/Tasca1/Exercici1.jsx';
import T1_Exercici2 from './assets/componentes/Tasca1/Exercici2.jsx';
import T1_Exercici3 from './assets/componentes/Tasca1/Exercici3.jsx';
import T1_Exercici4 from './assets/componentes/Tasca1/Exercici4.jsx';

import T2_Exercici1 from './assets/componentes/Tasca2/Exercici1.jsx';
import T2_Exercici2 from './assets/componentes/Tasca2/Exercici2.jsx';

import Informacion from './assets/componentes/Tasca3/Props.jsx';
import mapacheIMG from './assets/imagenes/mapache.png';

function App() {
  const [tareaActiva, setTareaActiva] = useState('Tasca3');

  return (
    <div>
      <nav className="menu-tareas">
        <h1>Mi Biblioteca de React</h1>
        <div className="botones-menu">
          <button onClick={() => setTareaActiva('Tasca1')}>Tasca 1</button>
          <button onClick={() => setTareaActiva('Tasca2')}>Tasca 2</button>
          <button onClick={() => setTareaActiva('Tasca3')}>Tasca 3</button>
        </div>
      </nav>

      <main className="area-visualizacion">
        
        {tareaActiva === 'Tasca1' && (
          <div>
            <h2>Tasca 1</h2>
            <br />
            <T1_Exercici1 />
            <T1_Exercici2 />
            <T1_Exercici3 />
            <T1_Exercici4 />
          </div>
        )}

        {tareaActiva === 'Tasca2' && (
          <div>
            <h2>Tasca 2</h2>
            <T2_Exercici1 />
            <T2_Exercici2 />
          </div>
        )}

        {tareaActiva === 'Tasca3' && (
          <div>
            <h2>Ejercicios de la Tasca 3 (Props)</h2>
            <div className="contenedor-tarjetas">
              <Informacion 
                imagen={mapacheIMG}
                titulo="Mapache"
                texto="Los mapaches son mamíferos omnívoros famosos por su máscara negra y su gran inteligencia. Son capaces de usar sus patas delanteras como manos para abrir objetos complejos y tienen el hábito de mojar su comida para aumentar la sensibilidad táctil de sus garras."
                t_boton1="Saber más" e_boton1="https://es.wikipedia.org/wiki/Procyon"
                t_boton2="Compartir" e_boton2=""
              />
            </div>
          </div>
        )}

      </main>
    </div>
  );
}

export default App;
import { useState } from 'react';
import './App.css';

import T1_Exercici1 from './assets/componentes/Tasca1/Exercici1.jsx';
import T1_Exercici2 from './assets/componentes/Tasca1/Exercici2.jsx';
import T1_Exercici3 from './assets/componentes/Tasca1/Exercici3.jsx';
import T1_Exercici4 from './assets/componentes/Tasca1/Exercici4.jsx';

import T2_Exercici1 from './assets/componentes/Tasca2/Exercici1.jsx';
import T2_Exercici2 from './assets/componentes/Tasca2/Exercici2.jsx';

import Informacion from './assets/componentes/Tasca3/Props.jsx';

// --- IMPORTACIONES DE IMÁGENES ---
import mapacheIMG from './assets/imagenes/mapache.png';
import aizenIMG from './assets/imagenes/aizen 2.jpg';
import gokuIMG from './assets/imagenes/goku.jpg';
import luffyIMG from './assets/imagenes/luffy.jpg';
import thorfinnIMG from './assets/imagenes/thorfinn2.jpg';

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
            <br />
            <h2>Tasca 2</h2>
            <T2_Exercici1 />
            <T2_Exercici2 />
          </div>
        )}

        {tareaActiva === 'Tasca3' && (
          <div>
            <br />
            <h2>Ejercicios de la Tasca 3 (Props)</h2>
            <div className="contenedor-tarjetas">
              
              {/* 1. MAPACHE */}
              <Informacion 
                imagen={mapacheIMG}
                titulo="Mapache"
                texto="Los mapaches son famosos por su máscara negra y su gran inteligencia. Tienen el hábito de mojar su comida para aumentar la sensibilidad táctil."
                t_boton1="Saber más" e_boton1="https://es.wikipedia.org/wiki/Procyon"
                t_boton2="Compartir" e_boton2=""
              />

              <Informacion 
                imagen={thorfinnIMG}
                titulo="Thorfinn Karlsefni"
                texto="Protagonista de Vinland Saga. Un joven que pasa de buscar venganza a buscar una tierra de paz llamada Vinland, lejos de la guerra."
                t_boton1="Saber más" e_boton1="https://vinlandsaga.fandom.com/es/wiki/Thorfinn"
                t_boton2="Ver Anime" e_boton2="https://www.crunchyroll.com"
              />

              
              <Informacion 
                imagen={aizenIMG}
                titulo="Sōsuke Aizen"
                texto="El villano más icónico de Bleach. Un estratega brillante capaz de engañar a todo el Gotei 13 con su zanpakutō, Kyōka Suigetsu."
                t_boton1="Saber más" e_boton1="https://bleach.fandom.com/es/wiki/Sōsuke_Aizen"
                t_boton2="Ver Anime" e_boton2="https://www4.animeflv.net/anime/bleach-tv"
              />

             
              <Informacion 
                imagen={gokuIMG}
                titulo="Son Goku"
                texto="El legendario Saiyan de Dragon Ball. Su hambre de pelea y su noble corazón lo han convertido en el protector más fuerte de la Tierra."
                t_boton1="Saber más" e_boton1="https://dragonball.fandom.com/es/wiki/Goku"
                t_boton2="Ver Anime" e_boton2="https://www.crunchyroll.com/es-es/series/GR19V7816/dragon-ball-super"
              />

              
              <Informacion 
                imagen={luffyIMG}
                titulo="Monkey D. Luffy"
                texto="Capitán de los Piratas de Sombrero de Paja en One Piece. Su sueño es encontrar el tesoro legendario y ser el Rey de los Piratas."
                t_boton1="Saber más" e_boton1="https://onepiece.fandom.com/es/wiki/Monkey_D._Luffy"
                t_boton2="Ver Anime" e_boton2="https://www.crunchyroll.com"
              />

            </div>
          </div>
        )}

      </main>
    </div>
  );
}

export default App;
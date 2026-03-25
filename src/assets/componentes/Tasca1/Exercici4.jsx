import { useState } from 'react';

import img1 from '../../imagenes/mapache.png';
import img2 from '../../imagenes/thorfinn2.jpg';

function Exercici4() {
    const [mostrarImg1, setMostrarImg1] = useState(true);

    return (
        <div className="caja_blanca">
            <h2>Imagen que cambia singa su mai</h2>
            <div className="contador">
                <img 
                    src={mostrarImg1 ? img1 : img2} 
                    alt="Imatge interactiva" 
                    width="250" 
                    style={{ borderRadius: '10px', height: '150px', objectFit: 'cover' }} 
                />
            </div>
            <div className="botones-estilo">
                <button onClick={() => setMostrarImg1(!mostrarImg1)}>
                    Canviar Imatge
                </button>
            </div>
        </div>
    );
}

export default Exercici4;
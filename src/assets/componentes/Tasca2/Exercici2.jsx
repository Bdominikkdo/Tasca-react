import { useState } from 'react';

import img1 from '../../imagenes/thorfinn2.jpg';
import img2 from '../../imagenes/aizen 2.jpg';
import img3 from '../../imagenes/2Q.png';

function Exercici2() {
    const [imatges, setImatges] = useState([img1, img2, img3]);
    const [indice, setIndice] = useState(0);

    function seguent() {
        if (indice < imatges.length - 1) {
            setIndice(indice + 1);
        } else {
            setIndice(0); 
        }
    }

    return (
        <div className="caja_blanca">
            <h1>Exercici 2 - Ruleta</h1>
            
            <div className="contador">
                <img 
                    src={imatges[indice]} 
                    alt={`Imagen ${indice + 1}`} 
                    width="300" 
                    style={{ borderRadius: '15px' }} 
                />
            </div>

            <div className="botones_caja">
                <button onClick={seguent} className="boton aumentar">
                    Siguiente
                </button>
            </div>
            
        </div>
    );
}

export default Exercici2;
import React, { useState } from 'react';
import img1 from '../../Messi.jpg';
import img2 from '../../thorfinn2.jpg';
import img3 from '../../aizen 2.jpg';
import img4 from '../../2Q.png';

function Exercici2() {
    const [imatges, setImatges] = useState([img1, img2, img3, img4]);
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
            
            <div className="contador">
                <img src={imatges[indice]} width="300" style={{ borderRadius: '15px' }} />
            </div>

            <div className="botones_caja">
                <button onClick={seguent} className="boton aumentar">
                    siguiente
                </button>
            </div>
        </div>
    );
}

export default Exercici2;
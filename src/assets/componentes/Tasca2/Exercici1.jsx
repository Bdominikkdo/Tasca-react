import { useState } from 'react';


import img2 from '../../imagenes/thorfinn2.jpg';
import img3 from '../../imagenes/aizen 2.jpg';
import img4 from '../../imagenes/2Q.png';

function Exercici1T2() {
    
    const [imatges, setImatges] = useState([img2, img3, img4]);

    return (
        <div className="caja_blanca">
            <div className="titulo">
                <h1>Exercici 1 - Galeria</h1>
            </div>
            
            <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
                {imatges.map((imatge, index) => (
                    <div key={index} className="contador">
                        <img src={imatge} width="150" alt={`Galeria ${index + 1}`} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Exercici1T2;
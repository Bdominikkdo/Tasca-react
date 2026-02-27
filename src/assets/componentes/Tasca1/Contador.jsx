import React, { useState } from 'react';

function Contador() {
const [numero, setNumero] = useState(0);

function aumentar() {
    setNumero(numero + 1);
    }

    function disminuir() {
    setNumero(numero - 1);
    }


    return (
    <div>
        <div className="caja_blanca">
        <div className="titulo">
        <div className="mensaje"> 
        </div>
            <h1>Contador</h1>
        </div>
        
        <div className="contador">
            <div> 
            <span className="contador_numero">{numero}</span>
            </div>
        </div>

        <div className="botones_caja">
        <button onClick={disminuir} className="boton disminuir">-</button>
        <button onClick={aumentar} className="boton aumentar">+</button>
        </div>
        </div>
    </div>
    );
}

export default Contador;
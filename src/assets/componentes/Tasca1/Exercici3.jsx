import { useState } from 'react';

function Exercici3() {
    const [negrita, setNegrita] = useState(false);
    const [cursiva, setCursiva] = useState(false);
    const [subrayado, setSubrayado] = useState(false);

    const estiloTexto = {
        fontWeight: negrita ? 'bold' : 'normal',
        fontStyle: cursiva ? 'italic' : 'normal',
        textDecoration: subrayado ? 'underline' : 'none'
    };

    return (
        <div className="caja_blanca">
            <h2>Texto singa tu mai</h2>
            <p style={estiloTexto} className="texto-lorem">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="botones-estilo">
                <button onClick={() => setNegrita(!negrita)}>Negreta</button>
                <button onClick={() => setCursiva(!cursiva)}>Cursiva</button>
                <button onClick={() => setSubrayado(!subrayado)}>Subratllat</button>
            </div>
        </div>
    );
}

export default Exercici3;
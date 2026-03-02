import React, { useState } from 'react';
function Texto() {

    const[negrita, Setnegrita] = useState(false)
    const[cursiva, Setcursiva] = useState(false)
    const[subrayar, Setsubrayar] = useState(false)

function nergita(){

    

}

  return (
    <div>
       <p id="mensaje">Lorem Ipsum</p>
       <button onClick={nergita}>Negrita</button>
       <button>Cursiva</button>
       <button>Subrayar</button>
    </div>
  )
}

export default Texto

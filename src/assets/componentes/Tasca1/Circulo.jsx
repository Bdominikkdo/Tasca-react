import React, { useState } from 'react';

function Circulo() {
  const [color, setColor] = useState("white");

  function Rojo() {
    setColor("red");
  }

  function Morado() {
    setColor("purple");
  }

  function Negro() {
    setColor("black");
  }

  return (
    <div>
    <div class = "circulo"></div>
      <button onClick={Rojo}>Rojo</button>
      <button onClick={Morado}>Morado</button>
      <button onClick={Negro}>Negro</button>
    </div>
  );
}

export default Circulo;
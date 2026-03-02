import React, { useState } from 'react';

function Exercici2() {
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
    <div className="circulo" style={{ backgroundColor: color }}></div>
      <button onClick={Rojo}>Rojo</button>
      <button onClick={Morado}>Morado</button>
      <button onClick={Negro}>Negro</button>
    </div>
  );
}

export default Exercici2;
function informacion({ imagen, titulo, texto, t_boton1, e_boton1, t_boton2, e_boton2 }) {
  return (
    <div className="tarjeta-info">
      <img src={imagen} alt={titulo} />
      <div className="cuerpo-tarjeta">
        <h1>{titulo}</h1>
        <p>{texto}</p>
      </div>
      <div className="pie-tarjeta">
        <a href={e_boton1} className="boton-accion">{t_boton1}</a>
        <a href={e_boton2} className="boton-accion">{t_boton2}</a>
      </div>
    </div>
  )
}

export default informacion; 
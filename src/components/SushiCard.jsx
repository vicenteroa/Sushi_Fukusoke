// En SushiCard.jsx
import React, { useEffect } from 'react';

const SushiCard = ({ producto, agregarAlCarrito }) => {
  useEffect(() => {
    console.log('Tipo de agregarAlCarrito en SushiCard (montaje):', typeof agregarAlCarrito);
  }, [agregarAlCarrito]);

  const handleAgregarsushi = () => {
    console.log("Agregando al carrito:", producto);
    if (typeof agregarAlCarrito === 'function') {
      agregarAlCarrito(producto);
    } else {
      console.error('agregarAlCarrito no es una función');
    }
  };

  return (
    <div className="tarjeta-producto" key={producto._id}>
      <img src={`http://localhost:5173/public/${producto.img.ruta}`} alt={producto.nombre} />
      <h3>{producto.nombre}</h3>
      <p className="precio">${producto.precio}</p>
      <button onClick={handleAgregarsushi}>Agregar al carrito</button>
    </div>
  );
};

export default SushiCard;
// src/components/ShoppingCartItem.jsx
import React from 'react';

const ShoppingCartItem = ({ producto, sushis, restarAlCarrito }) => {
  const sushi = producto.id ? sushis.find(s => s.id === producto.id) : null;

  return (
    <div className="item-carrito">
      {sushi && (
        <>
          <img src={sushi.img.ruta} alt={sushi.nombre} />
          <h3>{sushi.nombre}</h3>
          <p>Cantidad: {producto.cantidad}</p>
          <button onClick={() => restarAlCarrito(producto)}>Quitar del carrito</button>
        </>
      )}
    </div>
  );
};

export default ShoppingCartItem;


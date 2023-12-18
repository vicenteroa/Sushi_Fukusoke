// CarritoCounts.jsx
import React from 'react';
import './CarritoCounts.css'

const CarritoCounts = ({ cantidadCarrito, rutaIcono }) => {
  return (
    <div className="shopping-cart-link">
      <img src={rutaIcono} alt="Carrito de compras" className='shopping-cart-icon'/>
      <span className="contador-carrito">{cantidadCarrito}</span>
    </div>
  );
};

export default CarritoCounts;
import React, { useState, useEffect } from 'react';
import Header from '../../components/header.jsx';
import SushiCard from '../../components/SushiCard.jsx';
import './Cart.css';

const Cart = ({ carrito: initialCarrito = [], restarAlCarrito, reiniciarCarrito }) => {
  const [carrito, setCarrito] = useState(initialCarrito);

  const redirigir = () => {
    // Reemplaza '/nueva-pagina' con la ruta a la que deseas redirigir
    window.location.href = '/carta';
  };

  useEffect(() => {
    fetch('http://localhost:5173/api/sushis')
      .then(response => response.json())
      .then(data => setCarrito(data))
      .catch(error => console.error('Error fetching sushis:', error));
  }, []);


  return (
    <div className='div-allpage'>
      <Header />
      <main>
        <p id="carrito-vacio" className={carrito.length === 0 ? '' : 'escondido'}>
          Tu carrito:, <a href="/carta">elige mas productos</a>
        </p>
        <section id="totales">
          <p>Total unidades:3 <span id="cantidad"></span></p>
          <p>Total precio: $19.880<span id="precio"></span></p>
          <button id="comprar" onClick={() => (alert("Compra exitosa"))}>Comprar</button>
          <button id="reiniciar" onClick={redirigir}>Reiniciar carrito</button>
        </section>
      </main>
    </div>
  );
};

export default Cart;

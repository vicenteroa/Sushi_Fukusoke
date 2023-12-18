// src/pages/page4/index.jsx
import React, { useState, useEffect } from 'react';
import SushiCard from '../../components/SushiCard.jsx';
import Header from '../../components/header.jsx';
import './style.css';
import './index.css';

const Index = ({ agregarAlCarrito }) => {
  const [sushis, setSushis] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5173/api/sushis')
      .then(response => response.json())
      .then(data => setSushis(data))
      .catch(error => console.error('Error fetching sushis:', error));
  }, []);


  useEffect(() => {
    console.log('Tipo de agregarAlCarrito en Index:', typeof agregarAlCarrito);
  }, [agregarAlCarrito]);

  return (
    <div className='body-index'>
      <Header showShoppingCartIcon={true} />
      <main>
        <section id="sushis-container">
          {sushis.map((producto) => (
        <SushiCard key={producto._id} producto={producto} agregarAlCarrito={agregarAlCarrito} />
  ))}
        </section>
      </main>

      {/* Pie de página */}
      <footer className='foot-index'>
        {/* ... */}
      </footer>
    </div>
  );
};

export default Index;


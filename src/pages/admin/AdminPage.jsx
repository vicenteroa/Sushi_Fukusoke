// AdminPage.jsx
import React, { useState, useEffect } from 'react';
import Header from '../../components/header.jsx';
import './admin.css';

function AdminPage() {
  const [sushiName, setSushiName] = useState('');
  const [sushiPrice, setSushiPrice] = useState('');
  const [sushiImg, setSushiImg] = useState('');
  const [sushis, setSushis] = useState([]);
  const [users, setUsers] = useState([]); // Nuevo estado para la lista de usuarios

  useEffect(() => {
    // Obtener la lista de sushis y usuarios al cargar la página
    fetchSushisAndUsers();
  }, []);

  const fetchSushisAndUsers = async () => {
    try {
      // Obtener la lista de sushis
      const sushiResponse = await fetch('/api/sushis');
      const sushiData = await sushiResponse.json();
      setSushis(sushiData);

      // Obtener la lista de usuarios
      const usersResponse = await fetch('/api/users');
      const userData = await usersResponse.json();
      setUsers(userData);
    } catch (error) {
      console.error('Error al obtener datos:', error);
    }
  };

  const handleAddSushi = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('/api/sushis', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nombre: sushiName,
          precio: Number(sushiPrice),
          img: {
            ruta: sushiImg,
          },
        }),
      });

      if (response.ok) {
        // Actualizar la lista de sushis en el frontend
        fetchSushisAndUsers();
        console.log('Sushi agregado correctamente');
      } else {
        console.error('Error al agregar el sushi');
      }
    } catch (error) {
      console.error('Error al agregar el sushi:', error);
    }
  };

  const handleDeleteSushi = async (sushiId) => {
    try {
      const response = await fetch(`/api/sushis/${sushiId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        // Actualizar la lista de sushis en el frontend
        fetchSushisAndUsers();
        console.log('Sushi eliminado correctamente');
      } else {
        console.error('Error al eliminar el sushi');
      }
    } catch (error) {
      console.error('Error al eliminar el sushi:', error);
    }
  };

  return (
    <div>
      <Header />
      <h2>Panel de Administración</h2>

      <section className="sushi-management">
        <h3>Administrar Sushis</h3>

        <form onSubmit={handleAddSushi}>
          <label htmlFor="sushiName">Nombre del Sushi:</label>
          <input
            type="text"
            id="sushiName"
            name="sushiName"
            required
            value={sushiName}
            onChange={(e) => setSushiName(e.target.value)}
          />

          <label htmlFor="sushiPrice">Precio:</label>
          <input
            type="number"
            id="sushiPrice"
            name="sushiPrice"
            required
            value={sushiPrice}
            onChange={(e) => setSushiPrice(e.target.value)}
          />

          <label htmlFor="sushiImg">Ruta de la Imagen:</label>
          <input
            type="text"
            id="sushiImg"
            name="sushiImg"
            value={sushiImg}
            onChange={(e) => setSushiImg(e.target.value)}
          />

          <button type="submit">Agregar Sushi</button>
        </form>

        <ul className="sushi-list">
          {sushis.map((sushi) => (
            <li key={sushi._id}>
              {sushi.nombre} - ${sushi.precio}{' '}
              <button type="button" onClick={() => handleDeleteSushi(sushi._id)}>
                Eliminar
              </button>
            </li>
          ))}
        </ul>
      </section>

      <section className="user-list">
        <h3>Lista de Usuarios</h3>
        <ul>
          {users.map((user) => (
            <li key={user._id}>
              {user.username} - {user.email}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default AdminPage;

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Despacho.css';
import pLimit from 'p-limit';

const limit = pLimit(2); // Puedes ajustar el número según tus necesidades

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const fetchSushisAndUsers = async () => {
  try {
    // Utilizamos p-limit para limitar las conexiones concurrentes
    const [sushiData, userData] = await Promise.all([
      limit(() => fetch('/api/sushis').then(response => response.json())),
      limit(() => fetch('/api/users').then(response => response.json())),
    ]);

    return { sushis: sushiData, users: userData };
  } catch (error) {
    console.error('Error al obtener datos:', error);
    throw error;
  }
};

function Despacho() {
  const { id } = useParams();
  const [sushi, setSushi] = useState(null);
  const [usuario, setUsuario] = useState('');
  const [users, setUsers] = useState([]);
  const [cachedData, setCachedData] = useState({}); // Estado para almacenar en caché los resultados de las solicitudes

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Verificar si los datos están en caché
        if (cachedData.sushis && cachedData.users) {
          setSushi(cachedData.sushis.find(s => s._id === id));
          setUsers(cachedData.users);
        } else {
          // Realizar las solicitudes solo si no están en caché
          const { sushis, users } = await fetchSushisAndUsers();

          // Almacenar en caché los resultados
          setCachedData({ sushis, users });

          // Establecer los datos en el estado
          setSushi(sushis.find(s => s._id === id));
          setUsers(users);
        }
      } catch (error) {
        console.error('Error al obtener datos en Despacho:', error);
      }
    };

    fetchData();
  }, [id, cachedData]);

  const handleDespacho = () => {
    // Obtener el nombre del sushi si existe
    const sushiName = sushi ? sushi.nombre : 'No seleccionado';
  
    // Obtener los nombres de los usuarios
    const userNames = users.map(user => user.nombre);
  
    console.log('Información del Despacho:');
    console.log(`Sushi: ${sushiName}`);
    console.log(`Usuarios: ${userNames.join(', ')}`);
  };
  
  return (
    <div className="despacho-container">
      <h2>Despacho de Sushi</h2>
      {sushi && (
        <div className="sushi-details">
          <p>Nombre del Sushi: {sushi.nombre}</p>
          <p>Precio: {sushi.precio}</p>
        </div>
      )}
      <label htmlFor="usuario" className="usuario-label">
        Nombre del Usuario:
      </label>
      <input
        type="text"
        id="usuario"
        value={usuario}
        onChange={(e) => setUsuario(e.target.value)}
        className="usuario-input"
      />

      <div className="usuarios-lista">
        <h3>Lista de Usuarios:</h3>
        <ul className="usuarios-ul">
          {users.map(user => (
            <li key={user.username} className="usuario-li">
              {user.username}
            </li>
          ))}
        </ul>
      </div>

      <button onClick={handleDespacho} className="despacho-button">
        Despachar
      </button>
    </div>
  );
}

export default Despacho;

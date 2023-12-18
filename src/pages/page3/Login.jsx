import React, { useState } from 'react';
import Header from '../../components/header.jsx';
import '../page3/Login.css';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });



  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5173/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Inicio de sesión exitoso:', data);
        // Aquí puedes redirigir al usuario a la página de inicio u otras acciones necesarias
      // Verificar si hay una propiedad "redirect" en la respuesta
      if (data.redirect === '/admin') {
        // Si no hay redirección, realizar otras acciones necesarias


        // Puedes redirigir a otra página o realizar otras acciones aquí
      }

      } else {
        alert('Inicio de sesión exitoso');
        window.location.href = '/carta';
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  };

  const redirigir = () => {
    // Reemplaza '/nueva-pagina' con la ruta a la que deseas redirigir
    window.location.href = '/register';
  };

  return (
    <div className='bdy-wall'>
      <section id="login">
        <Header />
        <div className='contenedor-login'>
          <h2 className='tit1-login'>Inicia sesión:</h2>
          <form id="login-form" className='formulario-login' onSubmit={handleSubmit}>
            <div className='form-group'>
              <label htmlFor="email" className='label-login'>Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                className='input-login'
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className='form-group'>
              <label htmlFor="password" className='label-login'>Contraseña:</label>
              <input
                type="password"
                id="password"
                name="password"
                className='input-login'
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <input type="submit" value="Iniciar sesión" className='btn-login' />
          </form>
          <input type="submit" value="No tienes cuenta?" className='btn-register' onClick={redirigir}/>

        </div>
      </section>
    </div>
  );
}

export default Login;

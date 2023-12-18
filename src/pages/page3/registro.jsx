import React, { useState } from 'react';
import Header from '../../components/header.jsx';
import '../page3/Register.css';

const Registro = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    direccion: '',
    comuna: '',
    edad: '',
    telefono: '',
    sexo: 'hombre', // Valor predeterminado
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

    console.log('Nombre de usuario a enviar:', formData.username);


    try {
      const response = await fetch('http://localhost:5173/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
  
      if (response.ok) {
        console.log('Registro exitoso');
        setFormData({
          username: '',
          email: '',
          direccion: '',
          comuna: '',
          edad: '',
          telefono: '',
          sexo: 'hombre',
          password: '',
        });
      } else {
        console.error('Error al registrar el usuario');
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  };
  return (
    <div className='bdy-wall'>
      <section id="login">
        <Header />
        <div className='contenedor-login'>
          <h2 className='tit1-login'>Registro:</h2>
          <form id="login-form" className='formulario-login' onSubmit={handleSubmit}>

            <div className='form-column'>
              <div className='form-group'>
                <label htmlFor="nombre" className='label-login'>Nombre Completo</label>
                <input type="text" id="nombre" name="username" className='input-login' value={formData.username} onChange={handleChange} required />
              </div>

              <div className='form-group'>
                <label htmlFor="email" className='label-login'>Email:</label>
                <input type="email" id="email" name="email" className='input-login' value={formData.email} onChange={handleChange} required />
              </div>

              <div className='form-group'>
                <label htmlFor="direccion" className='label-login'>Direccion</label>
                <input type="text" id="direccion" name="direccion" className='input-login' value={formData.direccion} onChange={handleChange} required />
              </div>

              <div className='form-group'>
                <label htmlFor="comuna" className='label-login'>Comuna</label>
                <input type="text" id="comuna" name="comuna" className='input-login' value={formData.comuna} onChange={handleChange} required />
              </div>
            </div>

            <div className='form-column2'>
              <div className='form-group'>
                <label htmlFor="edad" className='label-login'>Edad</label>
                <input type="text" id="edad" name="edad" className='input-login' value={formData.edad} onChange={handleChange} required />
              </div>

              <div className='form-group'>
                <label htmlFor="telefono" className='label-login'>Telefono</label>
                <input type="text" id="telefono" name="telefono" className='input-login' value={formData.telefono} onChange={handleChange} required />
              </div>

              <div className='form-group'>
                <label htmlFor="sexo" className='label-login'>Sexo</label>
                <select id="sexo" name="sexo" className='input-login' value={formData.sexo} onChange={handleChange} required>
                  <option value="hombre">Masculino</option>
                  <option value="mujer">Femenino</option>
                </select>
              </div>

              <div className='form-group'>
                <label htmlFor="password" className='label-login'>Contraseña:</label>
                <input type="password" id="password" name="password" className='input-login' value={formData.password} onChange={handleChange} required />
              </div>
            </div>

            <input type="submit" value="Crear Cuenta" className='btn-login' />
          </form>
        </div>
      </section>
    </div>
  );
}

export default Registro;


const { insertUser, getUserByUsername } = require('../models/register.models.cjs');
const bcrypt = require('bcrypt');

async function registerController(req, res) {
  const { username, password, email, direccion, comuna, edad, telefono, sexo } = req.body;

  try {
    // Verificar que el nombre de usuario se esté recibiendo correctamente
    console.log('Nombre de usuario recibido:', username);

    // Intentar encontrar al usuario
    let user = await getUserByUsername(username);

    if (!user) {
      // Si el usuario no existe, insertar uno nuevo (registra al usuario)
      await insertUser(username, password, email, direccion, comuna, edad, telefono, sexo);

      // Volver a buscar al usuario después de la inserción
      user = await getUserByUsername(username);

      // Confirmar el registro del nuevo usuario
      console.log('Usuario registrado con éxito:', user);
    } else {
      // Si el usuario ya existe, devuelve un error
      return res.status(400).json({ error: 'El usuario ya existe' });
    }

    // No incluir la contraseña en la respuesta
    res.status(200).json({
      message: 'Registro exitoso',
      user: {
        username: user.username,
        email: user.email,
        direccion: user.direccion,
        comuna: user.comuna,
        edad: user.edad,
        telefono: user.telefono,
        sexo: user.sexo,
      },
    });
  } catch (error) {
    console.error('Error en el controlador de registro:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
}

module.exports = {
  registerController,
};

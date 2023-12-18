const { getUserByEmail } = require('../models/login.models.cjs');
const { client } = require('../db.cjs'); // Agrega esta línea para obtener el objeto client
const bcrypt = require('bcrypt');

async function loginController(req, res) {
  const { email, password } = req.body;

  try {
    // Verificar que el email se esté recibiendo correctamente
    console.log('Email recibido:', email);

    // Intentar encontrar al usuario por email
    const user = await getUserByEmail(email);

    if (!user) {
      // Si el usuario no existe, devuelve un error
      return res.status(401).json({ error: 'Credenciales incorrectas' });
    }

    // Verificar la contraseña
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      // Si la contraseña no coincide, devuelve un error
      return res.status(401).json({ error: 'Credenciales incorrectas' });
    }

    if (email === 'admin@sushi.cl' && password === '123') {
      // Redirigir a la página de administración si las credenciales son de un admin
      return res.json({ redirect: '/admin' });
    }

    if(email === "despacho@sushi.cl" && password=== '123'){
      return res.json({ redirect: '/despacho'});
    }

    // Aquí puedes generar un token de sesión si estás utilizando autenticación basada en tokens

    // No incluir la contraseña en la respuesta
    res.status(200).json({
      message: 'Inicio de sesión exitoso',
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

    console.log('Inicio de sesión exitoso', { username: user.username });

  } catch (error) {
    console.error('Error en el controlador de inicio de sesión:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
}

const getAllUsers = async (req, res, next) => {
  try {
    const users = await client.db("Sushi_Fukusoke").collection('Login').find({}, { projection: { username: 1, email: 1 } }).toArray();
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  loginController,
  getAllUsers,
};

const { client } = require('../db.cjs');
const bcrypt = require('bcrypt');

async function getUserByUsername(username) {
  const user = await client.db("Sushi_Fukusoke").collection('Login').findOne({ username });
  return user;
}

async function insertUser(username, password, email, direccion, comuna, edad, telefono, sexo) {
  // Almacenar la contraseña de forma segura
  const hashedPassword = await bcrypt.hash(password, 10); // 10 es el costo del hash

  const user = {
    username,
    password: hashedPassword,
    email,
    direccion,
    comuna,
    edad,
    telefono,
    sexo,
  };

  return client.db("Sushi_Fukusoke").collection('Login').insertOne(user);
}

module.exports = {
  getUserByUsername,
  insertUser,
};

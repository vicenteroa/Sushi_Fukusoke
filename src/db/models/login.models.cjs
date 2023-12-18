const { client } = require('../db.cjs');
const bcrypt = require('bcrypt');

async function getUserByUsername(username) {
  const user = await client.db("Sushi_Fukusoke").collection('Login').findOne({ username });
  return user;
}

async function getUserById(userId) {
  const user = await client.db("Sushi_Fukusoke").collection('Login').findOne({ _id: userId });
  return user;
}

async function getUserByEmail(email) {
    const user = await client.db("Sushi_Fukusoke").collection('Login').findOne({ email });
    return user;
  }
  
module.exports = {
  getUserByUsername,
  getUserById,
  getUserByEmail
};

// sushi.models.js
const { client } = require('../db.cjs');
const { ObjectId } = require('mongodb');

async function getAllSushis() {
  const sushis = await client.db("Sushi_Fukusoke").collection('catalogo').find({}).toArray();
  return sushis;
}

async function addSushi(nombre, precio, img) {
  const sushi = {
    nombre,
    precio,
    img,
  };

  try {
    const result = await client.db("Sushi_Fukusoke").collection('catalogo').insertOne(sushi);
    console.log('Resultado de la inserción:', result);

    if (result && result.insertedId) {
      const insertedSushi = await client.db("Sushi_Fukusoke").collection('catalogo').findOne({ _id: result.insertedId });
      return insertedSushi;
    } else {
      throw new Error('Error al insertar el sushi en la base de datos: No se pudo obtener el objeto insertado.');
    }
  } catch (error) {
    console.error('Error al insertar el sushi en la base de datos:', error);
    throw error;
  }
}

async function deleteSushi(sushiId) {
  try {
    const result = await client.db("Sushi_Fukusoke").collection('catalogo').deleteOne({ _id: new ObjectId(sushiId) });
    if (result.deletedCount === 1) {
      return { success: true, message: 'Sushi eliminado correctamente' };
    } else {
      return { success: false, message: 'No se encontró el sushi con el ID proporcionado' };
    }
  } catch (error) {
    console.error('Error al eliminar el sushi en la base de datos:', error);
    throw error;
  }
}

module.exports = {
  getAllSushis,
  addSushi,
  deleteSushi,
};

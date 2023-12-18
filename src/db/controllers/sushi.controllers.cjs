// sushi.controllers.js
const sushiModels = require('../models/sushi.models.cjs');

async function getAllSushisController(req, res) {
  try {
    const sushis = await sushiModels.getAllSushis();
    res.status(200).json(sushis);
  } catch (error) {
    console.error('Error obteniendo la lista de sushis:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
}

async function addSushiController(req, res) {
    const { nombre,precio, img } = req.body;
  
    try {
      const addedSushi = await sushiModels.addSushi(nombre, precio, img);
      res.status(201).json({ message: 'Sushi agregado correctamente', sushi: addedSushi });
    } catch (error) {
      console.error('Error al agregar el sushi:', error);
      res.status(500).json({ error: 'Error interno del servidor', details: error.message });
    }
  }
  

async function deleteSushiController(req, res) {
  const sushiId = req.params.id;

  try {
    await sushiModels.deleteSushi(sushiId);
    res.status(200).json({ message: 'Sushi eliminado correctamente' });
  } catch (error) {
    console.error('Error al eliminar el sushi:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
}

module.exports = {
  getAllSushisController,
  addSushiController,
  deleteSushiController,
};

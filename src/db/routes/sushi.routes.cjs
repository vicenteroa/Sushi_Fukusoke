// sushi.routes.js
const express = require('express');
const router = express.Router();
const sushiControllers = require('../controllers/sushi.controllers.cjs');

router.get('/sushis', sushiControllers.getAllSushisController);
router.post('/sushis', sushiControllers.addSushiController);
router.delete('/sushis/:id', sushiControllers.deleteSushiController);

module.exports = router;

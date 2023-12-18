// login.routes.js
const express = require('express');
const router = express.Router();
const { registerController } = require('../controllers/register.controllers.cjs');

router.post('/register', registerController);

module.exports = router;
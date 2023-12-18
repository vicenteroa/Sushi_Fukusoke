// login.routes.js
const express = require('express');
const router = express.Router();
const { loginController,getAllUsers } = require('../controllers/login.controllers.cjs');

router.post('/login', loginController);
router.get('/users', getAllUsers);

module.exports = router;
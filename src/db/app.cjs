const express = require('express');
const { connectToDatabase } = require('./db.cjs');
const bodyParser = require('body-parser');
const cors = require('cors');

const RegisterRoutes = require('./routes/register.routes.cjs');
const LoginRoutes = require('./routes/login.routes.cjs')
const sushiRoutes = require('./routes/sushi.routes.cjs');

const app = express();
const PORT = process.env.PORT || 5173;

// Middleware para analizar JSON
app.use(express.json());
app.use('/static', express.static('public'));

// Configuración de CORS
app.use(cors());
app.options('*', cors());

// Conexión a MongoDB
connectToDatabase();

// Conectar las rutas
app.use('/api', RegisterRoutes);
app.use('/api',LoginRoutes);
app.use('/api', sushiRoutes); // Agrega las rutas de sushi

// Manejar errores CORS
app.use((err, req, res, next) => {
  console.log(err);
  if (err.name === 'CORSError') {
    return res.status(403).json({ error: 'CORS error: No permitido por política de mismo origen' });
  }
  next(err);
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});

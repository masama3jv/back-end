require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Permitir que Express reciba JSON
app.use(express.json());

// Conectar a MongoDB
connectDB();

// Ruta de prueba
app.get('/', (req, res) => res.send('API Ecommerce en marxa 🚀'));

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor escoltant al port ${PORT}`));

// index.js (Versão 100% FINAL)

// 1. Importar as ferramentas
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
// NÃO PRECISAMOS disto: require('express-async-errors');

// Importar as Rotas
const actorRoutes = require('./src/routes/actor.routes.js');
const movieRoutes = require('./src/routes/movie.routes.js');

// Importar o Middleware de Erro
const errorHandler = require('./src/middlewares/error.middleware.js'); // <-- (1) IMPORTA O 'ERROR HANDLER'

// 2. Iniciar o express
const app = express();
const PORTA = 4000;

// --- CONEXÃO COM O BANCO DE DADOS (MongoDB) ---
mongoose.connect(process.env.DATABASE_URL)
  .then(() => {
    console.log('Conectado ao MongoDB!');
  })
  .catch((err) => {
    console.error('Erro ao conectar ao MongoDB:', err);
  });

// 3. Configurar os Middlewares
app.use(cors());
app.use(express.json());

// 4. USAR AS ROTAS
app.use('/api/actors', actorRoutes);
app.use('/api/movies', movieRoutes);

// 5. USAR O MIDDLEWARE DE ERRO
// IMPORTANTE: Tem de ser DEPOIS de todas as rotas
app.use(errorHandler); // <-- (2) USA O 'ERROR HANDLER'

// 6. "Ligar" o servidor
app.listen(PORTA, () => {
  console.log(`Servidor rodando na porta ${PORTA}`);
});
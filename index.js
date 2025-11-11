// index.js (Versão FINAL - Com Rotas de Atores e Filmes)

// 1. Importar as ferramentas
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

// --- IMPORTAR NOSSAS NOVAS ROTAS ---
const actorRoutes = require('./src/routes/actor.routes.js');
const movieRoutes = require('./src/routes/movie.routes.js'); // <-- LINHA NOVA

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

// 3. Configurar os "porteiros" (Middlewares)
app.use(cors());
app.use(express.json());

// 4. USAR AS ROTAS QUE IMPORTAMOS
app.use('/api/actors', actorRoutes); // Rota de Atores
app.use('/api/movies', movieRoutes); // <-- LINHA NOVA (Rota de Filmes)

// 5. "Ligar" o servidor
app.listen(PORTA, () => {
  console.log(`Servidor rodando na porta ${PORTA}`);
});
// src/routes/movie.routes.js
const express = require('express');
const router = express.Router(); // Cria o "roteador"

// 1. Importar os "controllers" (garçons) dos filmes
const movieController = require('../controllers/movie.controller.js');

// 2. Definir as rotas para o CRUD de Filmes

// Rota para CRIAR um filme (Método POST)
// URL: /api/movies/
router.post('/', movieController.createMovieController);

// Rota para LISTAR filmes (Método GET)
// URL: /api/movies/
router.get('/', movieController.listAllMoviesController);

// Rota para ATUALIZAR um filme (Método PUT)
// URL: /api/movies/ID_DO_FILME
// O ':id' na URL é um parâmetro que o controller vai pegar
router.put('/:id', movieController.updateMovieController);

// Rota para DELETAR um filme (Método DELETE)
// URL: /api/movies/ID_DO_FILME
router.delete('/:id', movieController.deleteMovieController);

// 3. Exporta o roteador pronto
module.exports = router;
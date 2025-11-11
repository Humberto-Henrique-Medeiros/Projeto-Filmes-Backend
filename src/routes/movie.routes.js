// src/routes/movie.routes.js
const express = require('express');
const router = express.Router();

// 1. Importa o controller E a validação
const movieController = require('../controllers/movie.controller.js');
const { validateMovie } = require('../middlewares/validation.middleware.js'); // <-- LINHA NOVA

// 2. Adiciona a validação nas rotas POST e PUT
router.post('/', validateMovie, movieController.createMovieController); // <-- LINHA MODIFICADA
router.get('/', movieController.listAllMoviesController);
router.get('/:id', movieController.getMovieByIdController);
router.put('/:id', validateMovie, movieController.updateMovieController); // <-- LINHA MODIFICADA
router.delete('/:id', movieController.deleteMovieController);

module.exports = router;
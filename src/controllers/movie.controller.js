// src/controllers/movie.controller.js

// 1. Importar os "serviços" dos filmes
const movieService = require('../services/movie.service.js');

// 2. Controller para CRIAR um filme
const createMovieController = async (req, res) => {
  try {
    // Pega todos os dados do corpo da requisição (JSON)
    const movieData = req.body;

    // Chama o serviço para criar o filme
    const newMovie = await movieService.createMovieService(movieData);

    // Envia a resposta de sucesso (Código 201 = Criado)
    res.status(201).json(newMovie);
    
  } catch (error) {
    console.error("### ERRO REAL:", error); // Bom deixar para debugar
    res.status(500).json({ message: 'Erro ao criar filme' });
  }
};

// 3. Controller para LISTAR os filmes
const listAllMoviesController = async (req, res) => {
  try {
    // Chama o serviço para buscar todos os filmes
    const movies = await movieService.listAllMoviesService();
    
    // Envia a lista de filmes como resposta
    res.status(200).json(movies);

  } catch (error) {
    console.error("### ERRO REAL:", error); // Bom deixar para debugar
    res.status(500).json({ message: 'Erro ao listar filmes' });
  }
};

// 4. Controller para ATUALIZAR um filme (CORRIGIDO)
const updateMovieController = async (req, res) => {
  try {
    // --- CORREÇÃO AQUI ---
    // Pega o ID do filme da URL (ex: /api/movies/ID_DO_FILME)
    const movieId = req.params.id;
    // --- FIM DA CORREÇÃO ---
    
    // Pega os novos dados do corpo da requisição
    const movieData = req.body;

    // Chama o serviço para atualizar (agora 'movieId' existe)
    const updatedMovie = await movieService.updateMovieService(movieId, movieData);

    // Envia o filme atualizado como resposta
    res.status(200).json(updatedMovie);
    
  } catch (error) {
    console.error("### ERRO REAL:", error); // Erro aparece aqui no terminal
    res.status(500).json({ message: 'Erro ao atualizar filme' });
  }
};

// 5. Controller para DELETAR um filme (JÁ CORRIGIDO TAMBÉM)
const deleteMovieController = async (req, res) => {
  try {
    // Pega o ID do filme da URL
    const movieId = req.params.id;

    // Chama o serviço para deletar
    await movieService.deleteMovieService(movieId);

    // Envia uma resposta de sucesso, mas sem conteúdo (Código 204)
    res.status(204).send();
    
  } catch (error) {
    console.error("### ERRO REAL:", error); // Bom deixar para debugar
    res.status(500).json({ message: 'Erro ao deletar filme' });
  }
};

// 6. Exporta todos os controllers
module.exports = {
  createMovieController,
  listAllMoviesController,
  updateMovieController,
  deleteMovieController,
};
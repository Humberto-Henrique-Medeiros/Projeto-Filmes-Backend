// src/controllers/movie.controller.js

const movieService = require('../services/movie.service.js');

// Controller para CRIAR
const createMovieController = async (req, res) => {
  try {
    const movieData = req.body;
    const newMovie = await movieService.createMovieService(movieData);
    res.status(201).json(newMovie);
  } catch (error) {
    console.error("### ERRO REAL:", error);
    res.status(500).json({ message: 'Erro ao criar filme' });
  }
};

// Controller para LISTAR
const listAllMoviesController = async (req, res) => {
  try {
    const movies = await movieService.listAllMoviesService();
    res.status(200).json(movies);
  } catch (error) {
    console.error("### ERRO REAL:", error);
    res.status(500).json({ message: 'Erro ao listar filmes' });
  }
};

// --- FUNÇÃO NOVA ADICIONADA AQUI ---
// Controller para BUSCAR UM filme pelo ID
const getMovieByIdController = async (req, res) => {
  try {
    const movieId = req.params.id; // Pega o ID da URL
    const movie = await movieService.getMovieByIdService(movieId);
    
    if (!movie) {
      return res.status(404).json({ message: "Filme não encontrado" });
    }
    
    res.status(200).json(movie); // Devolve o filme
  } catch (error) {
    console.error("### ERRO REAL:", error);
    res.status(500).json({ message: 'Erro ao buscar filme' });
  }
};
// --- FIM DA ADIÇÃO ---

// Controller para ATUALIZAR
const updateMovieController = async (req, res) => {
  try {
    const movieId = req.params.id;
    const movieData = req.body;
    const updatedMovie = await movieService.updateMovieService(movieId, movieData);
    res.status(200).json(updatedMovie);
  } catch (error) {
    console.error("### ERRO REAL:", error);
    res.status(500).json({ message: 'Erro ao atualizar filme' });
  }
};

// Controller para DELETAR
const deleteMovieController = async (req, res) => {
  try {
    const movieId = req.params.id;
    await movieService.deleteMovieService(movieId);
    res.status(204).send();
  } catch (error) {
    console.error("### ERRO REAL:", error);
    res.status(500).json({ message: 'Erro ao deletar filme' });
  }
};

// Exporta todos os controllers (com a função nova)
module.exports = {
  createMovieController,
  listAllMoviesController,
  getMovieByIdController, // <-- ADICIONADO AQUI
  updateMovieController,
  deleteMovieController,
};
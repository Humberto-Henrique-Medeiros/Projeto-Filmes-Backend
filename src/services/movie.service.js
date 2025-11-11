// src/services/movie.service.js

// 1. Importar o "molde" do Filme
const Movie = require('../models/Movie.model.js');

// 2. Função para CRIAR um novo filme
const createMovieService = async (movieData) => {
  const newMovie = await Movie.create(movieData);
  return newMovie;
};

// 3. Função para LISTAR todos os filmes
const listAllMoviesService = async () => {
  const movies = await Movie.find().populate('atores');
  return movies;
};

// --- FUNÇÃO NOVA ADICIONADA AQUI ---
// 4. Função para BUSCAR UM filme pelo ID
const getMovieByIdService = async (movieId) => {
  // Encontra o filme pelo ID e também dá populate nos atores
  const movie = await Movie.findById(movieId).populate('atores');
  return movie;
};
// --- FIM DA ADIÇÃO ---

// 5. Função para ATUALIZAR um filme
const updateMovieService = async (movieId, movieData) => {
  const updatedMovie = await Movie.findByIdAndUpdate(movieId, movieData, { new: true });
  return updatedMovie;
};

// 6. Função para DELETAR um filme
const deleteMovieService = async (movieId) => {
  await Movie.findByIdAndDelete(movieId);
};

// 7. Exporta tudo (com a função nova)
module.exports = {
  createMovieService,
  listAllMoviesService,
  getMovieByIdService, // <-- ADICIONADO AQUI
  updateMovieService,
  deleteMovieService,
};
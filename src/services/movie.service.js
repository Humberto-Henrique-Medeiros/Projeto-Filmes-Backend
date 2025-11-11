// src/services/movie.service.js

// 1. Importar o "molde" do Filme
const Movie = require('../models/Movie.model.js');

// 2. Função para CRIAR um novo filme
const createMovieService = async (movieData) => {
  // movieData é o JSON com titulo, genero, etc.
  const newMovie = await Movie.create(movieData);
  return newMovie;
};

// 3. Função para LISTAR todos os filmes
const listAllMoviesService = async () => {
  // --- A MÁGICA DO N:M ESTÁ AQUI ---
  // Usamos .populate('atores') para o Mongoose trocar os IDs
  // pelos dados completos dos atores (ex: o nome).
  const movies = await Movie.find().populate('atores');
  return movies;
};

// 4. Função para ATUALIZAR um filme
// (Recebe o ID do filme e os novos dados)
const updateMovieService = async (movieId, movieData) => {
  // Encontra o filme pelo ID e atualiza ele com os novos dados
  // { new: true } faz ele retornar o filme JÁ ATUALIZADO.
  const updatedMovie = await Movie.findByIdAndUpdate(movieId, movieData, { new: true });
  return updatedMovie;
};

// 5. Função para DELETAR um filme
// (Recebe o ID do filme)
const deleteMovieService = async (movieId) => {
  // Encontra o filme pelo ID e deleta ele
  await Movie.findByIdAndDelete(movieId);
};


// 6. Exporta tudo
module.exports = {
  createMovieService,
  listAllMoviesService,
  updateMovieService,
  deleteMovieService,
};
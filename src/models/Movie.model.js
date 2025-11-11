// src/models/Movie.model.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const movieSchema = new Schema({
  titulo: { type: String, required: true },
  faixaEtaria: { type: Number, required: true },
  genero: { type: String, required: true },
  atores: [{
    type: Schema.Types.ObjectId,
    ref: 'Actor'
  }]
});
const Movie = mongoose.model('Movie', movieSchema);
module.exports = Movie;
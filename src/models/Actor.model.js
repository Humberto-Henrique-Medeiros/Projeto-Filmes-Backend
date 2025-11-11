// src/models/Actor.model.js
const mongoose = require('mongoose');
const actorSchema = new mongoose.Schema({
  nome: { type: String, required: true }
});
const Actor = mongoose.model('Actor', actorSchema);
module.exports = Actor;
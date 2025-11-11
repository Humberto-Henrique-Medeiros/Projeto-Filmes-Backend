// src/controllers/actor.controller.js
const actorService = require('../services/actor.service.js');

const createActorController = async (req, res) => {
  try {
    const { nome } = req.body;
    const newActor = await actorService.createActorService({ nome });
    res.status(201).json(newActor);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao criar ator' });
  }
};
const listAllActorsController = async (req, res) => {
  try {
    const actors = await actorService.listAllActorsService();
    res.status(200).json(actors);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao listar atores' });
  }
};
module.exports = {
  createActorController,
  listAllActorsController,
};
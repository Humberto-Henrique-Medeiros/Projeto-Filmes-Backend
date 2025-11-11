// src/services/actor.service.js
const Actor = require('../models/Actor.model.js');

const createActorService = async (actorData) => {
  const newActor = await Actor.create(actorData);
  return newActor;
};
const listAllActorsService = async () => {
  const actors = await Actor.find();
  return actors;
};
module.exports = {
  createActorService,
  listAllActorsService,
};
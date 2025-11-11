// src/routes/actor.routes.js
const express = require('express');
const router = express.Router();
const actorController = require('../controllers/actor.controller.js');

router.post('/', actorController.createActorController);
router.get('/', actorController.listAllActorsController);

module.exports = router;
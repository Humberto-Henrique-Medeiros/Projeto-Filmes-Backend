// src/routes/actor.routes.js
const express = require('express');
const router = express.Router();

// 1. Importa o controller E a validação
const actorController = require('../controllers/actor.controller.js');
const { validateActor } = require('../middlewares/validation.middleware.js'); // <-- LINHA NOVA

// 2. Adiciona o 'validateActor' ANTES do controller
// A rota POST agora primeiro valida, depois controla
router.post('/', validateActor, actorController.createActorController); // <-- LINHA MODIFICADA

// (O GET não precisa de validação de body)
router.get('/', actorController.listAllActorsController);

module.exports = router;
// src/middlewares/validation.middleware.js
const { body, validationResult } = require('express-validator');

// Esta função é o "polícia" que verifica se há erros
const checkValidation = (req, res, next) => {
  // Traz os erros encontrados pela validação
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    // Se houver erros, retorna 400 (Bad Request) e a lista de erros
    return res.status(400).json({ errors: errors.array() });
  }

  // Se não houver erros, segue para o próximo passo (o controller)
  next();
};

// --- Regras de Validação para ATORES ---
const validateActor = [
  // "nome" deve ser uma string e não pode estar vazio
  body('nome')
    .isString().withMessage('O nome deve ser um texto')
    .notEmpty().withMessage('O nome é obrigatório'),

  // No final, chama o "polícia"
  checkValidation
];

// --- Regras de Validação para FILMES ---
const validateMovie = [
  // "titulo" deve ser uma string e não pode estar vazio
  body('titulo')
    .isString().withMessage('O título deve ser um texto')
    .notEmpty().withMessage('O título é obrigatório'),

  // "faixaEtaria" deve ser um número
  body('faixaEtaria')
    .isNumeric().withMessage('A faixa etária deve ser um número'),

  // "genero" deve ser uma string e não pode estar vazio
  body('genero')
    .isString().withMessage('O gênero deve ser um texto')
    .notEmpty().withMessage('O gênero é obrigatório'),

  // "atores" deve ser um array (lista) e não pode estar vazio
  body('atores')
    .isArray({ min: 1 }).withMessage('O filme deve ter pelo menos um ator'),

  // No final, chama o "polícia"
  checkValidation
];

// Exporta as regras
module.exports = {
  validateActor,
  validateMovie,
};
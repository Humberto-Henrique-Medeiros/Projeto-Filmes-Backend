// src/middlewares/error.middleware.js

// Este é o nosso "apanhador" de erros central.
// Ele precisa de 4 argumentos (err, req, res, next)
// para o Express saber que é um middleware de erro.
const errorHandler = (err, req, res, next) => {
  // (Opcional) Podes fazer 'if (err.status) ...' para erros específicos

  console.error("### ERRO APANHADO PELO HANDLER:", err.message); // Loga o erro no terminal

  // Responde ao cliente com um erro 500 genérico
  res.status(500).json({
    message: "Ocorreu um erro interno no servidor."
  });
};

module.exports = errorHandler;
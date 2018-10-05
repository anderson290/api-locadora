//importando express
const express = require('express');
const router = express.Router();

//importando controller
const controller = require('../controllers/filmes.controller');

//rota de listagem
router.get('/', controller.get)

//listando por ID
router.get('/admin/:id', controller.getById)

//listando por codigo
router.get('/:codigo', controller.getByCodigo)

//listando por ator
router.get('/ator/:ator', controller.getByAtor)

//criando rota de create
router.post('/', controller.post);

//UPDATE
router.put('/:codigo',controller.put);

//DELETE
router.delete('/', controller.delete);

module.exports = router;
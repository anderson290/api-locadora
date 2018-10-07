//importando express
const express = require('express');
const router = express.Router();

//importando controller
const controller = require('../controllers/filmes.controller');

//importando verificação por token
const authService = require('../Services/auth.service');

//rota de listagem
router.get('/', controller.get)

//listando por ID
router.get('/admin/:id', controller.getById)

//listando por codigo
router.get('/:codigo', controller.getByCodigo)

//listando por ator
router.get('/ator/:ator', controller.getByAtor)

//criando rota de create
//autorizando por token
router.post('/', authService.authorize, controller.post);

//UPDATE
router.put('/:id', controller.put);

//DELETE
router.delete('/:id', controller.delete);

module.exports = router;
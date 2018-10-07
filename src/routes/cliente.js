//importando express
const express = require('express');
const router = express.Router();

//importando controller
const controller = require('../controllers/cliente.controller');


router.post('/', controller.post);
router.post('/auth', controller.autenticando);
//exportando rotas
module.exports = router;
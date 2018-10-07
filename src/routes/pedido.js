//importando express
const express = require('express');
const router = express.Router();

//importando controller
const controller = require('../controllers/pedido.controller');

router.get('/', controller.get);
router.post('/', controller.post);

//exportando rotas
module.exports = router;
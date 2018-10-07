const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const app = express();
const mongoose = require('mongoose');

//importando configuração
const config = require('./config');

//conectar com o banco
mongoose.connect(config.connectionString, {useNewUrlParser : true});

//importando rotas
const index = require('./routes/index');
const filmesRota = require('./routes/filmes');
const clienteRota = require('./routes/cliente');
const pedidoRota = require('./routes/pedido');

//model
const filmeModel = require('./models/filme.model');
const clientModel = require('./models/cliente.model');
const pedidoModel = require('./models/pedido.model');

//convertendo conteudo para JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', index);
app.use('/filmes', filmesRota);
app.use('/clientes', clienteRota);
app.use('/pedidos', pedidoRota);



module.exports = app;
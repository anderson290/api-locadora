const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const app = express();
const mongoose = require('mongoose');

//conectar com o banco
mongoose.connect('mongodb://anderson29:hunteronce29@ds119853.mlab.com:19853/programa_de_formacao', {useNewUrlParser : true});

//importando rotas
const index = require('./routes/index');
const filmesRota = require('./routes/filmes');





//convertendo conteudo para JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', index);
app.use('/filmes', filmesRota);



module.exports = app;
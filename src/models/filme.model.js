'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    codigo:{ 
        type: Number,
        required: true,
        unique: true
    },
    nome: {
        type: String,
        required: true,
        trim: true
    },
    genero:{
        type: String,
        required: true,
        trim: true
    },
    ator:[{
        type: String,
        require: true
    }],
    lancamento_data:{
        type: String
    }

})

module.exports = mongoose.model('Filme', schema);
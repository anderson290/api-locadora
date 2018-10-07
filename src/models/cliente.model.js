'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    cpf:{ 
        type: String,
        required: true,
        unique: true
    },
    email:{
        type: String,
        required: true
    },
    senha:{
        type: String,
        required: true
    },
    nome: {
        type: String,
        required: true,
        trim: true
    },
    endereco:{
        type: String,
        required: true,
        trim: true
    },
    telefone:[{
        type: String,
        require: true
    }]

})

module.exports = mongoose.model('Cliente', schema);
'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    numero:{ 
        type: String,
        required: true,
        unique: true
    },
    cliente:{
        //referenciando o cliente que fez o pedido
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cliente'
    },
    dataPedido:{ 
        type: Date,
        required: true,
        default: Date.now
    },
    
    itens:[{
        quantidade:{ 
            type: Number,
            required: true,
            //por padrao tera 1
            default: 1
        },
        preco:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Filme'
        },
        filmeRef:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Filme'
        }
    }]
});

module.exports = mongoose.model('Pedido', schema);
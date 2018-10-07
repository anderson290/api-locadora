'use strict'
//importando mongoose
const mongoose = require('mongoose');
//importando model de filmes
require('../models/pedido.model');
const pedidoModel = mongoose.model('Pedido');


//criando repositorios

//listar pedidos
exports.get = async()=> {
    //populate preenche o cliente | produto | etc
    var res = await pedidoModel.find({})
        .populate('cliente')
        .populate('itens.filmeRef');
    return res;
}


//CREATE
exports.create = async(data)=>{
    
    //instanciando a model e passando os paramentros 
    var pedido = new pedidoModel(data);
    //salvando item no banco
    await pedido.save();
    
}

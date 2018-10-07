'use strict'
//importando mongoose
const mongoose = require('mongoose');
//importando model de filmes
require('../models/cliente.model');
const clienteModel = mongoose.model('Cliente');


//criando repositorios

exports.get = async()=> {
    var res = await clienteModel.find({});
    return res;
}

//CREATE
exports.create = async(data)=>{
    
    //instanciando a model e passando os paramentros 
    var cliente = new clienteModel(data);
    //salvando item no banco
    await cliente.save();
    
}

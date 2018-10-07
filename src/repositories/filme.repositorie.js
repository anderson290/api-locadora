'use strict'
//importando mongoose
const mongoose = require('mongoose');
//importando model de filmes
require('../models/filme.model');
const filmeModel = mongoose.model('Filme');


//criando repositorios

//retornando o filtro do select por nome/genero/lancamento_data
exports.get = async()=>{
    const res = await filmeModel.find({}, 'nome genero lancamento_data');
    return res;
}
// retornando o filtro do select por ID
exports.getById = async(id)=>{ 
    const resId = await filmeModel.findById(id);
    return resId;
}

//filtrando o select por codigo
exports.getByCodigo = async(codigo)=>{
    const resCod = await filmeModel.findOne({codigo}, 'codigo nome genero lancamento_data ator');
    return resCod;
}
//retornando filtro do select por autor
exports.getByAtor = async(ator) =>{
    const resAtor = await filmeModel.findOne({ator},'codigo nome genero lancamento_data');
    return resAtor;
}

//CREATE
exports.create = async(data)=>{
    
    //instanciando a model e passando os paramentros 
    var filme = new filmeModel(data);
    //salvando item no banco
    await filme.save();
    
}

//UPDATE
exports.update = async(id, data) => {
    await filmeModel.findByIdAndUpdate(id, {
        $set:{
            nome: data.nome,
            genero: data.genero,
            lancamento_data: data.lancamento_data
        }
    })
}

//DELETE
exports.delete = async(id) => {
    await filmeModel.findOneAndRemove(id,{})
}

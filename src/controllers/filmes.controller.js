'use extrict'
const mongoose = require('mongoose');

//importando modulo de filmes
require('../models/filme.model');
const filmeModel = mongoose.model('Filme');

//listando
exports.get = (req, res, next)=>{
    //filtrando o select por nome/genero/lancamento_data
    filmeModel.find({}, 'nome genero lancamento_data').then(data =>{
        //se der tudo certo ele lista
        res.status(200).send({data});
    }).catch(e =>{
        //se não, mensagem de erro
        res.status(400).send({e});
    }); 
}
//listando por ID
exports.getById = (req, res, next)=>{
    //filtrando o select por nome/genero/lancamento_data
    filmeModel.findById(req.params.id)
        .then(data =>{
        //se der tudo certo ele lista
        res.status(200).send({data});
    }).catch(e =>{
        //se não, mensagem de erro
        res.status(400).send({e});
    }); 
}




//listando por código
exports.getByCodigo = (req, res, next)=>{
    //filtrando o select por nome/genero/lancamento_data
    filmeModel.findOne({codigo: req.params.codigo}, 'codigo nome genero lancamento_data ator').then(data =>{
        //se der tudo certo ele lista
        res.status(200).send({data});
    }).catch(e =>{
        //se não, mensagem de erro
        res.status(400).send({e});
    }); 
}

//listando por ator
exports.getByAtor = (req, res, next)=>{
    //filtrando o select por nome/genero/lancamento_data
    filmeModel.findOne({ator: req.params.ator},'codigo nome genero lancamento_data').then(data =>{
        //se der tudo certo ele lista
        res.status(200).send({data});
    }).catch(e =>{
        //se não, mensagem de erro
        res.status(400).send({e});
    }); 
}



//create
exports.post = (req, res, next) =>{

    //instanciando a model e passando os paramentros 
    var filme = new filmeModel(req.body);
    //salvando item no banco
    filme.save().then(x =>{
        //se der tudo certo ele grava
        res.status(201).send({message: 'Filme Cadastrado =D'});
    }).catch(e =>{
        //se não, mensagem de erro
        res.status(400).send({message: 'Filme não Cadastrado =C', data: e});
    });
   
};

//update
exports.put = (req, res, next) =>{
    const id = req.params.id;
    res.status(201).send({id: id, item: req.body});
};

//delete
exports.delete = (req, res, next) =>{
    res.status(200).send(req.body);
};
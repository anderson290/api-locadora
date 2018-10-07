'use extrict'

//importando repositório
const repository = require('../repositories/pedido.repositorie');

//importando pacote de geração de numeros (guid)
const guid = require('guid');

//listando pedidos
exports.get = async(req, res, next)=>{
    //chamando repositorio com a função get
    try{
         var data = await repository.get();
         res.status(200).send(data);
    }catch(e){
         res.status(500).send({
             message: 'Falha ao processar a requisição!'
         });
    }
    
 }

//create
exports.post = async(req, res, next) =>{
    try{
        await repository.create({
            numero: guid.raw().substring(0, 6),
            cliente: req.body.cliente,
            itens: req.body.itens
        });
        res.status(200).send({message: 'Pedido Cadastrado =D'});  
    } catch(e){
        res.status(500).send({
            message: 'Falha ao processar a requisição!'+e
        });
   }
     
   
};
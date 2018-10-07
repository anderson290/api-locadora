'use extrict'

//importando objeto de validação
const validatorContract = require('../validators/filmes.validator');

//importando repositório
const repository = require('../repositories/cliente.repositorie');

//import para encriptar senha
const md5 = require('md5');

//importando serviço email
const emailServico = require('../Services/email.service');

//listando pedidos
exports.get = async(req, res, next)=>{
    //chamando repositorio com a função get
    try{
         await repository.get();
         res.status(200).send(data);
    }catch(e){
         res.status(500).send({
             message: 'Falha ao processar a requisição!'
         });
    }
    
 }
//create
exports.post = async(req, res, next) =>{
    //aplicando validações
    let contract = new validatorContract();

    //validando pelo tamanho do cpf digitado
    contract.hasMinLen(req.body.cpf, 11, 'Cpf Incompleto');

    //validando pelo tamanho do nome digitado
    contract.hasMinLen(req.body.nome, 20, 'O nome deve conter no mínimo 20 caracteres');

    //verificando se é de fato um email
    contract.isEmail(req.body.email, 'Email Inválido');


    //validando pelo tamanho de genero digitado
    contract.hasMinLen(req.body.senha, 10, 'Sua senha deve conter no mínimo 10 caracteres');

    //verificando se os dados inputados estão inválidos
    if(!contract.isValid()){
        res.status(400).send(contract.errors()).end();
        return;
    }
    try{
        await repository.create({
            //compondo create para encriptar senha
            cpf: req.body.cpf,
            email: req.body.email,
            //encriptando senha
            senha: md5(req.body.senha)+global.SALT_KEY,
            nome: req.body.nome,
            endereco: req.body.endereco,
            telefone: req.body.telefone
        });
        
        //envio de email
        emailServico.send(
            req.body.email,
            'Bem vindo à livraria',
            global.EMAIL_TMPL.replace('{0}', req.body.name));
        res.status(200).send({message: 'Cliente Cadastrado =D'});  
    } catch(e){
        res.status(500).send({
            message: 'Falha ao processar a requisição!'+e
        });
   }   
   

};
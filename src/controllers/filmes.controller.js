'use extrict'

//importando objeto de validação
const validatorContract = require('../validators/filmes.validator');

//importando repositório
const repository = require('../repositories/filme.repositorie');

/*SUBSTITUINDO ESTE CODIGO
    .then(data =>{
        //se der tudo certo ele lista
        res.status(200).send({data});
    }).catch(e =>{
        //se não, mensagem de erro
        res.status(400).send({e});
    });  
        POR ASYNC E AWAIT    
*/

//listando
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
//listando por ID
exports.getById = async(req, res, next)=>{
    //chamando repositorio com a função getById
    try{
        var dataId = await repository.getById(req.params.id);
        res.status(200).send(dataId);
    }catch(e){
        res.status(500).send({
            message: 'Falha ao processar a requisição!'
        });
   }
    
}
//listando por código
exports.getByCodigo = async(req, res, next)=>{
    try{
        var dataCod = await repository.getByCodigo(req.params.codigo)
        res.status(200).send(dataCod);   
    }catch(e){
        res.status(500).send({
            message: 'Falha ao processar a requisição!'
        });
   }
};
//listando por ator
exports.getByAtor = async(req, res, next)=>{
    try{
        var dataAtor = await repository.getByAtor(req.params.ator);
        res.status(200).send(dataAtor);  
    }
    catch(e){
        res.status(500).send({
            message: 'Falha ao processar a requisição!'
        });
   }
}

//create
exports.post = async(req, res, next) =>{
    //aplicando validações
    let contract = new validatorContract();

    //validando pelo tamanho do filme digitado
    contract.hasMinLen(req.body.nome, 6, 'O nome do filme deve conter pelo menos 6 letras');

    //validando pelo tamanho de genero digitado
    contract.hasMinLen(req.body.genero, 6, 'O nome do filme deve conter pelo menos 6 letras');

    //validando pelo tamanho da data de lançamento
    contract.hasMinLen(req.body.lancamento_data, 10, 'A data de lançamento do filme deve conter pelo menos 10 caracteres');

    //verificando se os dados inputados estão inválidos
    if(!contract.isValid()){
        res.status(400).send(contract.errors()).end();
        return;
    }
    try{
        await repository.create(req.body);
        res.status(200).send({message: 'Filme Cadastrado =D'});  
    } catch(e){
        res.status(500).send({
            message: 'Falha ao processar a requisição!' + e
        });
   }
     
   
};

//update
exports.put = async(req, res, next) =>{
    try{
        
        var dataUpdate = await  repository.update(req.params.id, req.body);
        res.status(200).send({message: 'Filme Atualizado =D'});

    }catch(e){
        res.status(500).send({
            message: 'Falha ao processar a requisição!'
        });
    }
};  

//delete
exports.delete = async(req, res, next) =>{
    try{
        var dataDel = await repository.delete(req.params.id);
        res.status(200).send({message: 'Filme deletado =D'});
    }catch(e){
        res.status(500).send({
            message: 'Falha ao processar a requisição!'
        });
    }
};
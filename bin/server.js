'use strict'

//importando os pacotes
const app = require('../src/app');
const http = require('http');
const debug = require('debug')('nodestr:server');

const porta = normalizarPorta(process.env.PORT || '3000');
//setando a porta
app.set('port', porta);

const server = http.createServer(app);



//servidor ouvindo porta
server.listen(porta);
server.on('error', onError);
server.on('listening', onListening);
console.log('API rodando na porta: '+porta);

//função para normalizar a porta
function normalizarPorta(val){
    const port = parseInt(val, 10);

    if(isNaN(port)){
        return val;
    }
    if(port >=0){
        return port;
    }
    return false;
}

//função tirada do express para erro no servidor
function onError(error){
    if(error.syscall !== 'listen'){
        throw error;
    }

    const bind = typeof port === 'string' ?
        'Pipe ' + port:
        'Port ' + port;

    switch(error.code){
        case 'EACCES':
            console.error(bind+ ' requires elevant privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind+ ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

//função para debug
function onListening(){
    const addr = server.address();
    const bind = typeof addr === 'string'
        ? 'pipe '+ addr
        : 'port '+ addr.port;
    debug('Listening on '+bind);
}
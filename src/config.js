//arquivo de configurações
//senha encriptada + chave saltkey
global.SALT_KEY = 'f5b99242-6504-4ca3-90f2-05e78e5761ef';
//corpo do email {0}>vai ser o nome do usuario
global.EMAIL_TMPL = 'Olá, <strong>{0}</strong>, seja bem vindo à Livraria!';

module.exports = {
    connectionString: 'STRING DE CONEXAO',
    //sua chave do sendGrid
    sendgridKey: 'CHAVE SENDGRID'

}
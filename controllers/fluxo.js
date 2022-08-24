// Importar funções que serão utilizadas
//const "nome da função" = require('/Inserir path da função')
const FluxoService = require('../services/fluxoService')
// Criar rotas e exportar elas com module.exports
module.exports = app => {
    //app.get('/"Inserir url path do servidor"', (req,res)=> {"Enviar Resposta(res.Json())"})
    app.get('/', (req,res)=> {res.json('O servidor está na porta 3000')})
    //app.post('/"Inserir url path do servidor"', (req,res)=> {res.json('"Fazer tratamento da requisição e enviar resposta')})
    app.post('/', (req,res)=> {res.json('')})
}
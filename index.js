// Receber o module.exports das configs
const customExpress = require('./config/customExpress')

// Inicializar a aplicação com as exportações
const app = customExpress()

// Criar porta em que o servidor irá funcionar
//app.listen("Inserir o host", ()=> console.log("inserir mensagem informando que o servidor está funcionando"))
app.listen(4000, ()=> console.log('O servidor está funcionando'))
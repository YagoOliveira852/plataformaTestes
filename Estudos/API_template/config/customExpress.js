//inicilizar as dependecias instaladas
const express = require('express')
const consign = require('consign')

//exportar a inicilização da aplicação para outras pastas
module.exports= () =>{
    const app = express()

    app.use(express.json())
    app.use(express.urlencoded({ extended: true}))

    //realizar gerenciamento de rotas(exportar para outras pastas)
    consign()
    .include('controllers')
    .into(app)

    return app
}
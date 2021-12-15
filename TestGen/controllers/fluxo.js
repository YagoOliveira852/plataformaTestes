const fs = require('fs')
const { stringify } = require('querystring')
module.exports = app => {

    app.get('/fluxo/basico', (req,res)=> res.send('o servidor está na porta 3000'))
    app.post('/fluxo/basico', (req,res)=> {
        data = req.body
        var lista = {}
        for(var i=0; i< Object.keys(data.Fluxo_Básico).length; i++){
            if(data.Fluxo_Básico[i].search(data.Atores) >0){
                var aux = data.Fluxo_Básico[i]
                lista.aux
                lista[aux]=null
            }
            else{ 
                if(data.Fluxo_Básico[i-1].search(data.Atores) <0){
                    lista[aux]= lista[aux] + "   "+ [data.Fluxo_Básico[i]]
                }
                else{
                    lista[aux]=[data.Fluxo_Básico[i]]
                }
            }
        }
        CT = {
            "Título": [data.Id +" - " + Object.keys(data)[5]],
            "Dados de teste": [data.dados],
            "Passos": lista,
            "Id-UC": data.Id,
            "Fluxo-UC": Object.keys(data)[5]
        }
        res.send(CT)
    })
}
const { default: axios } = require('axios')
const { Console } = require('console')
const fs = require('fs')
const { stringify } = require('querystring')
const FluxoService = require('../services/fluxo-Service')

const fluxoService = new FluxoService();

module.exports = app => {

    app.get('/categories', (req,res)=> {
        const categories = 
        {
            "categories" : [
                {
                "id": 1,
                "name" : "Fluxo Básico" 
                },
                {
                "id": 2,
                "name" : "Fluxo Alternativo" 
                },
                {
                "id": 3,
                "name" : "Fluxo Exceção" 
                },
                {
                "id": 4,
                "name" : "Fluxo Geral (todas as opções)" 
                }
            ]
        }
        res.json((categories).categories)
    })

    app.post('/fluxo/basico', (req,res)=> {
        data = req.body
        
        CT = fluxoService.setFluxoBasico(data)
    
        res.json(CT)
    })

    app.post('/fluxo/alternativo', (req,res)=> {
        data = req.body

        array = fluxoService.setFluxoAlternativo(data)
    
        res.json(array)
    })

    app.post('/fluxo/excecao', (req,res)=> {
        data = req.body

        array = fluxoService.setFluxoExcecao(data)

        res.json(array)
    })
    app.post('/fluxo/geral', (req,res)=> {
        data = req.body
        var array = []

        CT = fluxoService.setFluxoBasico(data)
        array1 = fluxoService.setFluxoAlternativo(data)
        array2 = fluxoService.setFluxoExcecao(data)
        array.push(CT)
        array.push(array1)
        array.push(array2)

        
        res.json(array)
    })
}
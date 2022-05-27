class FluxoService{
    constructor(data){
        this.data = data
    }

    setFluxoBasico(data){
        var lista = {}
        var k = null
        
        for(var i=0; i< Object.keys(data.Fluxo_Basico).length; i++){
            if(data.Fluxo_Basico[i].search(data.Atores) >0){
                var aux = data.Fluxo_Basico[i]
                lista.aux
                lista[aux]=null
            }
            else{ 
                if(data.Fluxo_Basico[i-1].search(data.Atores) <0){
                    lista[aux]= lista[aux] + " ;  "+ [data.Fluxo_Basico[i]]
                }
                else{
                    lista[aux]=[data.Fluxo_Basico[i]]
                }
            }
        }
        var CT = {
            "Título": [data.Id +" - " + "Fluxo_Basico"],
            "Dados de teste": [data.dados],
            "Passos": [lista],
            "Pós-condição" : k,
            "Id-UC": [data.Id],
            "Fluxo-UC": ["Fluxo_Basico"]
        }
        

        return CT
    }

    setFluxoAlternativo(data){
        var lista = {}
        var CTaux
        var arr = []
        var array = []
        var k = null
        
        for(var keys in data.Fluxo_Alternativo){
            for(i in data.Fluxo_Alternativo[keys]){  
                
                if(JSON.stringify(data.Fluxo_Alternativo[keys][i]).search("Start") >0){
                    var tupla = Object.keys(data.Fluxo_Alternativo[keys][i])
                    var index = data.Fluxo_Alternativo[keys][i][tupla][0]

                    for(var j = 0; j< index ; j++){
                        arr.push(data[data.Fluxo_Alternativo[keys][i][tupla][1]][j])
                    }
                }
                
                if(JSON.stringify(data.Fluxo_Alternativo[keys][i]).search("End") >0){
                    tupla = Object.keys(data.Fluxo_Alternativo[keys][i])
                    if(data.Fluxo_Alternativo[keys][i][tupla][0] > index){
                        var index2 = data.Fluxo_Alternativo[keys][i][tupla][0]
                        
                        for(var j = index2-1; j < (data[data.Fluxo_Alternativo[keys][i][tupla][1]]).length ; j++){
                            arr.push(data[data.Fluxo_Alternativo[keys][i][tupla][1]][j])
                        }
                    }
                }
                if(JSON.stringify(data.Fluxo_Alternativo[keys][i]).search("Start") <0 && JSON.stringify(data.Fluxo_Alternativo[keys][i]).search("End") <0){
                    arr.push(data.Fluxo_Alternativo[keys][i])
                }
            }
            for(var i in arr){
                if(arr[i].search(data.Atores) >0){
                    var aux = arr[i]
                    lista.aux
                    lista[aux]=null
                }
                else{ 
                    if(arr[i-1].search(data.Atores) <0){
                        lista[aux]= lista[aux] + " ;  "+ [arr[i]]
                    }
                    else{
                        lista[aux]=[arr[i]]
                    }
                }
            }
            CTaux = {
                "Título": [data.Id + " - " + "Fluxo_Alternativo"],
                "Dados de teste": [data.dados],
                "Passos": [lista],
                "Pós-condição" : k,
                "Id-UC": [data.Id],
                "Fluxo-UC": ["Fluxo_Alternativo" + " - " + keys]
            }
            
            var CT = JSON.parse(JSON.stringify(CTaux));
            array.push(CT) 
            
        }
        return array
    }

    setFluxoExcecao(data){
        var lista = {}
        var CTaux
        var arr = []
        var array = []
        var k = null

        for(var keys in data.Fluxos_de_Excecao){
            for(i in data.Fluxos_de_Excecao[keys]){  
                if(JSON.stringify(data.Fluxos_de_Excecao[keys][i]).search("Start") >0){
                    var tupla = Object.keys(data.Fluxos_de_Excecao[keys][i])
                    var index = data.Fluxos_de_Excecao[keys][i][tupla][0]
                    for(var j = 0; j< index ; j++){
                        arr.push(data[data.Fluxos_de_Excecao[keys][i][tupla][1]][j])
                    }
                }
                
                if(JSON.stringify(data.Fluxos_de_Excecao[keys][i]).search("End") >0){
                    tupla = Object.keys(data.Fluxos_de_Excecao[keys][i])
                    if(data.Fluxos_de_Excecao[keys][i][tupla][0] > index){
                        index2 = data.Fluxos_de_Excecao[keys][i][tupla][0]
                        for(var j = index2-1; j < (data[data.Fluxos_de_Excecao[keys][i][tupla][1]]).length ; j++){
                            arr.push(data[data.Fluxos_de_Excecao[keys][i][tupla][1]][j])
                        }
                    }
                    else{
                        k = data.Fluxos_de_Excecao[keys][i]
                    }
                }
                if(JSON.stringify(data.Fluxos_de_Excecao[keys][i]).search("Start") <0 && JSON.stringify(data.Fluxos_de_Excecao[keys][i]).search("End") <0){
                    arr.push(data.Fluxos_de_Excecao[keys][i])
                }
            }
            for(var i in arr){
                if(arr[i].search(data.Atores) >0){
                    var aux = arr[i]
                    lista.aux
                    lista[aux]=null
                }
                else{ 
                    if(arr[i-1].search(data.Atores) <0){
                        lista[aux]= lista[aux] + " ;  "+ [arr[i]]
                    }
                    else{
                        lista[aux]=[arr[i]]
                    }
                }
            }
            
            CTaux = {
                "Título": [data.Id + " - " + "Fluxos_de_Excecao"],
                "Dados de teste": [data.dados],
                "Passos": lista,
                "Pós-condição" : k,
                "Id-UC": [data.Id],
                "Fluxo-UC": ["Fluxos_de_Excecao" + " - " + keys ]
            }

            var CT = JSON.parse(JSON.stringify(CTaux));
            array.push(CT)
        }
        return array
    }

}

module.exports = FluxoService;
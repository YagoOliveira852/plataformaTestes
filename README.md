# PlataformaTestes

Projeto Relacionado ao PIBITI 2021/2022

# TestGen

Projeto de refatoração da API desenvolvida anteriormente, visando um código atualizado e funcional.

### Introdução

O Teste Generator(TestGen) é uma aplicação que recebe Casos de Uso(UC) e realiza um tratamento e retorna Casos de Teste(CT). Visando a praticidade e automatização está sendo desenvolvida uma API(Interface de programação de aplicações) que recebe requisições e envia uma resposta de acordo com o método HTTP codificado e chamado.

### Funcionalidades

O TestGen, como já citado, realiza o tratamento de UC, isso ocorre após o seu recebimento por meio de uma requisição em formato JSON(JavaScript Object Notation), então por meio do método de requisição POST, um código para cada alternativa(diferente Fluxos) pesquisa e separa as informações necessárias para o CT. No momento de finalização do código, então é enviado uma reposta, também no formato JSON, contendo o CT desejado. Até o momento a aplicação contém os códigos para Fluxos básicos, Alternativos e de Exceção, para cada possibilidade destes.

Ademais, também houve a realização de um interface visual utilizando REACTjs, possibilitando que as requisições sejam feitas de maneira mais prática e intuitiva para o usuário.


### Alterações futuras

Em breve será feito a conexão da API do TestGen com outras APIs, em especial à API do TestLink, que recebe Casos de Teste. Ademais, será criado uma interface para facilitar o uso e manuseio da API.


<h1 align="center">ESIII-express</h1>

<p align="center">
    <img src="https://img.shields.io/static/v1?label=Faculdade Senac Pelotas&message=3º&color=fdca40&labelColor=000000" alt="Faculdade Senac Pelotas">
</p>


## Tecnologias Utilizadas no projeto :construction:

- [Node.js](https://nodejs.org/en/) <img align="center" alt="img nodejs" height="20" width="25" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" style="max-width:100%;" />
- [Faker.js](https://github.com/marak/Faker.js/) <img align="center" alt="img nodejs" height="20" width="35" src="https://raw.githubusercontent.com/Marak/faker.js/master/logo.png" style="max-width:100%;" />
- [Nodemon.js](https://www.npmjs.com/package/nodemon) <img align="center" alt="img nodejs" height="20" width="20" src="https://user-images.githubusercontent.com/13700/35731649-652807e8-080e-11e8-88fd-1b2f6d553b2d.png" style="max-width:100%;" />
- [express.js](https://expressjs.com/pt-br/starter/installing.html)

## Projeto :computer:

Este projeto e uma API que fornece dados de Clients atraves dos method do express. Os dados são criados pela biblioteca faker.js


> - create package.json
>
> ```npm --init -y ```

## Como executar :gear:

- Clone o repositório `https://github.com/DioenDJS/ESIII-express.git`.
- Install as dependências com o comando `npm install`.
- Rode o `npm run dev` para iniciar a aplicação.<br />
Ao final a aplicação estará disponível em `http://localhost:3333/client`.

## Dependências do Projetos :card_index_dividers:


> - faker.js 
>
> ``npm i faker -D``

> - nodemon
>
> ``npm i nodemon -D``

> - express
>
> ``npm i express``



## Rotas
> Insomina

``Se tiver o insomina instalado basta clicar no botão pra ter as URLs instaladas no seu insomina``

<br/>

[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=ESIII-Express&uri=https%3A%2F%2Fraw.githubusercontent.com%2FDioenDJS%2FESIII-express%2Fmain%2Fassets-readme%2FInsomnia_2021-08-21.json)

> exemplos de como utilizar as rotas do projeto com o ``insomina``

<br/>

> listando todos os clientes
`` http://localhost:3333/client``
<img align="center" alt="img method get"  src="assets-readme/getlistclient.png" style="max-width:100%;" />

<br/>

> Criando clientes
`` http://localhost:3333/client``
<img align="center" alt="img method post"  src="assets-readme/postcreateclient.png" style="max-width:100%;" />

<br/>


> listando cliente por id
`` http://localhost:3333/client/62d49401-16f2-4d8c-b712-e01e38682931``
<img align="center" alt="img method get"  src="assets-readme/getListOneClient.png" style="max-width:100%;" />

<br/>


> Alterando nome do cliente por id
`` http://localhost:3333/client/62d49401-16f2-4d8c-b712-e01e38682931``
<img align="center" alt="img nodejs"  src="assets-readme/putOneClient.png" style="max-width:100%;" />

<br/>

> Deletando cliente por id
`` http://localhost:3333/client/62d49401-16f2-4d8c-b712-e01e38682931``
<img align="center" alt="img nodejs"  src="assets-readme/deleteOneClient.png" style="max-width:100%;" />


const express = require('express');
const faker = require('faker');

const client = [];
for(let i = 0; i < 3; i++) {
    obj = {
        id: faker.datatype.uuid(),
        name: faker.name.findName(),
        telephone: faker.phone.phoneNumber(),
        createdAt: ""
    }
    client.push(obj);
}

const app = express();

//craindo um Middlewares
function log(request, response, next){
    const {url, method} = request;
    console.log(`${method} - ${url} at ${new Date()}`);
    return next();
}

app.use(express.json());

app.use(log);

//Retornando todos os clientes 
app.get('/client', (request, response) =>{

   
        const listClient = client.filter( value => value.createdAt === "");
        return response.status(200).json(listClient)
    
});


//retornando apenas um cliente especificado por "id"
app.get('/client/:id', (request, response) =>{
    const { id } = request.params;
    const clientSelect = client.filter(element => (element.id === id ))
        .find(element => element.createdAt === "");

    if(clientSelect === undefined){
        return response.status(400).json({error:'Requisição inválida !!'});
    }
    return response.status(200).json(clientSelect);
});

//criando um novo cliente
app.post('/client', (request, response) =>{
    const {name, telephone} = request.body;

        client.push({
            "id": faker.datatype.uuid(),
            "name": name,
            "telephone": telephone,
            "createdAt": ""
        });
        return response.status(201).json({msg:`Seja Bem Vindo ${name}`});

});


//Atualizando name de um client especificado por "id"
app.put('/client/:id', (request, response) =>{
    const {id} = request.params;
    const nome = request.body.name;

    const clientAltualizar = client.find((value) => value.id === id);

    if(clientAltualizar === undefined){
        return response.status(400).json({error:'Requisição inválida !!'})
    }
    clientAltualizar.name = nome;

    return response.status(200).json(clientAltualizar);
});

//Deletando client por "id" selecionado
app.delete('/client/:id', (request, response) =>{

    const {id} = request.params;
    const clientDelete = client.find( value => value.id === id );

    if(clientDelete === undefined){
        return response.status(400).send()
    }
    /* setando a o campo createAt que vai receber a data que este cliente passa a ser considerado 
    deletado e nao ira aparecer mais nas listagens de clientes*/
    clientDelete.createdAt = new Date();

    return response.status(204).json({"Cliente":`${clientDelete.name} foi deletado `});
})

app.listen(3333, console.log("run server !!!"));
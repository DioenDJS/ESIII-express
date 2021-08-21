const express = require('express');
const faker = require('faker');

const client = [];
for(let i = 0; i < 3; i++) {
    obj = {
        id: faker.datatype.uuid(),
        name: faker.name.findName(),
        telephone: faker.phone.phoneNumber(),
        createAt: ""
    }
    client.push(obj);
}
// console.log(client);

const app = express();

app.use(express.json());

//Retornando todos os clientes 
app.get('/client', (request, response) =>{

   
        const listClient = client.filter( value => value.createAt === "");
        return response.status(200).json(listClient)
    
});


//retornando apenas um cliente especificado por "id"
app.get('/client/:id', (request, response) =>{
    const { id } = request.params;
    const clientSelect = client.filter(element => element.id === id)
    return response.status(200).json(clientSelect);
});

//criando um novo cliente
app.post('/client', (request, response) =>{
    const {name, telephone} = request.body;

    client.push({
        "id": faker.datatype.uuid(),
        "name": name,
        "telephone": telephone,
    });
    return response.status(201).json(client);
});


//Atualizando name de um client especificado por "id"
app.put('/client/:id', (request, response) =>{
    const id = request.params.id;
    const nome = request.body.name;

    const clientAltualizar = client.filter((value) => value.id === id);

    clientAltualizar[0].name = nome;

    return response.status(200).json(clientAltualizar);
});

//Deletando client por "id" selecionado
app.delete('/client/:id', (request, response) =>{

    const id = request.params.id;

    const clientDelete = client.filter( value => value.id === id );

    /* setando a o campo createAt que vai receber a data que este cliente passa a ser considerado 
    deletado e nao ira aparecer mais nas listagens de clientes*/
    clientDelete[0].createAt = new Date();

    return response.status(200).send();
})

app.listen(3333, console.log("run server !!!"));
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000;

const members =[
    {
        nome: 'Felipe',
        idade: 19,
        Genero: 'Masculino',
        Cidade: 'São Paulo'
    }, 
    {
        nome: 'Arthur',
        idade: 18,
        Genero: 'Masculino',
        Cidade: 'São Paulo'
    }, 
    {
        nome: 'Amelie',
        idade: 25,
        Genero: 'Feminino',
        Cidade: 'França'
    }, 
    {
        nome: 'Double-trouble',
        idade: 20,
        Genero: 'Outro',
        Cidade: 'Etheria'
    }, 
];


//Pega todos os membros.
app.get('/api/members', (req, res)=>{
    res.json(members);
});

//Definindo folders estaticos
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, ()=>{
    console.log('Server started on port: ' + PORT);
});
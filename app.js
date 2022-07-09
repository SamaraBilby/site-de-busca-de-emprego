const { raw } = require('body-parser');
const express = require('express');
const app = express();

const db = require('./db/connection')

const PORT = 3000;

app.listen(PORT, function(){
    console.log(`O Express está rodando na porta ${PORT}`)
})
// conexão banco de dados

db
    .authenticate()
    .then(() => {
        console.log("Conectou ao banco com sucesso");
    })
    .catch(err => {
        console.log("Ocorreu um erro ao conectar", err);
    });
// rotas
app.get('/', (req, res) =>{
    res.send('Está Funcionando 3');
})
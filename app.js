const express = require('express');
const app = express();
const db = require('./db/connection');
const bodyParser = require('body-parser');
//const router = express.Router();



const PORT = 3000;



app.listen(PORT, function(){
    console.log(`O Express está rodando na porta ${PORT}`)
})
// conexão banco de dados

//body parser

app.use(bodyParser.urlencoded({ extended: false }));
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
});

// jobs rotas

app.use('/jobs', require('./routes/jobs'));
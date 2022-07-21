const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
const db = require('./db/connection');
const bodyParser = require('body-parser');
const path = require('path');
//const router = express.Router();



const PORT = 3000;



app.listen(PORT, function(){
    console.log(`O Express está rodando na porta ${PORT}`)
})


//body parser

app.use(bodyParser.urlencoded({ extended: false }));


// handleBars

app.set('views', path.join(__dirname, 'views')); // diretório
app.engine('handlebars', exphbs.engine({defaultLayout:'main'})); // arquivo principal de layout
app.set('view engine', 'handlebars'); 

//pasta de arquivos estáticos

app.use(express.static(path.join(__dirname, 'public')))


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
    res.render('index');
});

// jobs rotas

app.use('/jobs', require('./routes/jobs'));
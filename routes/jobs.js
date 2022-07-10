const express = require('express');

const router = express.Router();

const Job = require('../models/Job');


router.get('/test', (req, res) => {
    res.send('deu certo');
});

    // para adicionar JOB via POST

router.post('/add',(req, res) =>{
    let {title, salario, descricao, empresa, email, novo} = req.body;

    // inserir dados no sistema
    
    Job.create({
        title,
        descricao,
        salario,
        empresa,
        email,
        novo
    })
        .then(() => res.redirect('/'))
        .catch(err => console.log(err));

});

module.exports = router;




// Trazendo metodo pra trabalhar com rotas de forma repetitiva e padronizada.
const { Router } = require('express')

// definindo varial que ira receber o metodo (Router) do express
const router = new Router()

// trazendo o objeto modelo da tabela do banco de dados, para criação de novas informações.
const Job = require('../models/Job')

// DETALHE DA VAGA
router.get('/view/:id', async (req, res) => {
    // metodo de busca passando no Where: o valor unico indentificador de uma informação na URL.
    await Job.findOne({
        where: { id: req.params.id }
    })
        // promise caso haja algo no banco com a busca.
        .then(Job => {
            res.render('view', {
                Job
            })
        })
        .catch(err => { console.log(err) })
})


// FORM DA ROTA DE ENVIO
router.get('/add', (req, res) => {
    // rota que ira executar minha pagina de adicionar mais informações ao banco de dados.
    res.render('add')
})

// ADD JOB VIA POST
router.post('/add', async (req, res) => {
    //pagina de criação que trás a interface criada junto dos campos para inserirmos dados.
    const { title, salary, company, description, email, new_job } = req.body

    // INSERT
    // metodo que cria e envia para o banco os dados digitados, passando todas as variaveis resgatas do corpo da requisição.
    await Job.create({
        title,
        salary,
        company,
        description,
        email,
        new_job,
    })
        .then(() => {
            // após criar, o redirect nos retorna para a pagina principal
            res.redirect('/')
        })
        .catch(
            err => console.log(err)
        )
})

// REMOVE JOB

router.get('/delete/:id', async (req, res) => {
    const id = req.params.id

    await Job.destroy({
        where: { id: id }
    })
        .then(
            res.redirect('/')
        )
        .catch(err => console.log(err))
})

// exportando a variavel router para usarmos onde quisermos.
module.exports = router
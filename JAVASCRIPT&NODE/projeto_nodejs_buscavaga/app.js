// Importando Express para trabalhar com rotas dentro do node.
const express = require('express')

// Importando HandleBars para executar o codigo em HTML do projeto (NODE).
const exphbs = require('express-handlebars')

// Instanciando a uma variavel a classe Express que vai extender todos os outros metodos.
const app = express()

// Instanciando Path para trabalhar com caminhos absolutos dentro do meu código.
const path = require('path')

// Importando o Banco de dados ja definido em outro arquivo.
const db = require('./db/connection.js')

// Importando o body parser pra conseguir resgatar dados do corpo da requesição (Postman por json ou pela nossa pagina web)
const bodyParser = require('body-parser')

// Importando a instancia da model da minha tabela pra trabalhar o retorno dentro da rota.
const Job = require('./models/Job')

// Sequelize pra conseguirmos executar codigos na nossa base de dados relacional na forma de objeto.
const Sequelize = require('sequelize')

// trazendo um dos metodos do sequelize (metodo de busca relacionada, baseado na palavra de pesquisa.)
const Op = Sequelize.Op

// BODY PARSER
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json())

// HANDLE BARS (CONFIGURAÇÃO)
const hbs = exphbs.create({
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname, './views/layouts'),
})

// Definindo as paginas de exibição
app.engine('handlebars', hbs.engine)
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'handlebars')

// INSTANCIANDO SERVIDOR
app.listen(3000, () => { console.log('Server has been iniciated') })

// STATIC FOLDER
app.use(express.static(path.join(__dirname, 'public')))

// INSTANCIANDO CONEXÃO AO BANCO DE DADOS
db
    // metodo que ativa conexão com banco.
    .authenticate()
    // Primise de retorno caso tiver sucesso com a conexão.
    .then(() => {
        setTimeout(() => {
            console.log('conectado ao banco de dados')
        }, 1000);
    })
    // caso de erro, retorne um erro.
    .catch(err => console.log(err))

// ROUTES
app.get('/', async (req, res) => {

    // Pagina principal

    // resgatando valor enviado pelas querystrings e atribuindo a uma variavel.
    const search = req.query.job

    // variavel com retorno de busca de modo relacional (%)
    const query = '%' + search + '%'

    // Condição se caso o usuario enviar alguma busca, caso não retorna normalmente os dados já definidos em pagina.
    if (!search) {
        await Job.findAll({
            // Metodo de busca SQL usando Sequelize
            order: [
                ['createdAt', 'DESC']
            ]
        })
            .then(Jobs => {
                //caso não haja busca retorne um valor padrão.
                res.render('index', {
                    Jobs
                })
            })
            .catch(err => console.log(err))
    } else {
        await Job.findAll({
            // retornando valor relacionado atraves da busca do usuario.
            where: { title: { [Op.like]: query } },
            order: [['createdAt', 'DESC']]
        })
            .then(Jobs => {
                //retornando todas as informações e o dado buscado
                res.render('index', {
                    Jobs, search
                })
            })
            .catch(err => console.log(err))
    }
})

// Importando todas as rotas do, JOBS ROUTES. (Com um prefixo) 
app.use('/jobs', require('./routes/jobs.js'))
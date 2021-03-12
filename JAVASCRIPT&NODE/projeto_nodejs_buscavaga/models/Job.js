// sequelize para conversarmos com o SQLITE
const Sequelize = require('sequelize')
// importando conexão com o banco para quando criarmos algo, conversar diretamente com a nossa base de dados.
const db = require('../db/connection')

// definindo uma tabela que será usada no banco de dados.
const Job = db.define('job', {
    title: {
        type: Sequelize.STRING
    },
    description: {
        type: Sequelize.STRING
    },
    salary: {
        type: Sequelize.STRING
    },
    company: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    new_job: {
        type: Sequelize.INTEGER
    }
})

// exportando a nossa table de JOBS para usarmos onde quisermos
module.exports = Job
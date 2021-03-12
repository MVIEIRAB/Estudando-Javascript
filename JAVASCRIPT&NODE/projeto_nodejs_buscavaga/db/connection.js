const Sequelize = require('sequelize')

//definindo onde será encontrado o arquivo da nossa base de dados, da qual conversaremos na nossa aplicação.
const sequelize = new Sequelize({
    // dialect: como conversaremos com o banco e de qual forma iremos usar, dialect definimos o SQLITE
    dialect: 'sqlite',
    // indo para a pasta onde esta o arquivo DB.
    storage: './db/app.db'
})

// exportando sequelize para usarmos em outras lugares da nossa aplicação
module.exports = sequelize
const seq = require('sequelize')

const con = new seq('guiaperguntas','root','123456',{
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = con 
const seq3 = require('sequelize')
const con3 = require('./database-file')

const report3 = con3.define('pergunta',{
    titulo:{
        type: seq3.STRING,
        allowNull: false
    },
    descricao:{
        type: seq3.TEXT,
        allowNull: false
    }

})

report3.sync({force: false}).then(() => {})

module.exports = report3
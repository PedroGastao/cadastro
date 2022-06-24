const bancoDados = require("./db")

const infoCad = bancoDados.sequelize.define("cadastro", {
    nome: {
        type: bancoDados.Sequelize.STRING
    },
    cpf: {
        type: bancoDados.Sequelize.STRING
    },
    email: {
        type: bancoDados.Sequelize.STRING
    },
    telefone: {
        type: bancoDados.Sequelize.INTEGER
    },
    nascimento:{
        type: bancoDados.Sequelize.DATE
    }
})

//infoCad.sync({force: true})
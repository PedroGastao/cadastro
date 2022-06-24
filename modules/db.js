const Sequelize = require('sequelize') //banco de dados
const sequelize = new Sequelize("infocadastro", "root", "Kuahku10#", {
    host:"localhost",
    dialect:"mysql"
})//conexão com o banco de dados
//no primeiro parametro é o nome do banco de dados, o segundo o nome de usuario, o terceiro a senha do db

module.exports = {
    Sequelize : Sequelize,
    sequelize : sequelize
}
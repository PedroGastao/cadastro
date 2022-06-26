const Sequelize = require('sequelize') //banco de dados
const sequelize = new Sequelize("infocadastro", "root", "Kuahku10#", {
    host:"localhost",
    dialect:"mysql",
    query:{raw:true} //serviu para retornar os dados 
})//conexão com o banco de dados
//no primeiro parametro é o nome do banco de dados, o segundo o nome de usuario, o terceiro a senha do db

sequelize.authenticate().then(function(){
    console.log("conectado ao Banco de dados!")
}).catch(function(erro){
    console.log("falha ao conectar :" + erro)
})//then e catch serve para quando de certo ou errado

module.exports = {
    Sequelize : Sequelize,
    sequelize : sequelize
}
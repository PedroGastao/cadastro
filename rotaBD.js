const Sequelize = require('sequelize')

const sequelize = new Sequelize("sistemadecadastro", "root", "Kuahku10#", {
    host:"localhost",
    dialect:"mysql"
})
//no primeiro parametro é o nome do banco de dados, o segundo o nome de usuario, o terceiro a senha do db
//a localização do banco e qual banco

sequelize.authenticate().then(function(){
    console.log("conectado ao Banco de dados!")
}).catch(function(erro){
    console.log("falha ao conectar :" + erro)
})
//then e catch serve para quando de certo ou errado
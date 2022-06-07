const http = require("http")
const express = require("express");
const app = express();
const port = 3000;
const handlebars = require("express-handlebars") 
const Sequelize = require('sequelize') //banco de dados
const sequelize = new Sequelize("sistemadecadastro", "root", "Kuahku10#", {
    host:"localhost",
    dialect:"mysql"
})//conexão com o banco de dados
//no primeiro parametro é o nome do banco de dados, o segundo o nome de usuario, o terceiro a senha do db
//a localização do banco e qual banco
sequelize.authenticate().then(function(){
    console.log("conectado ao Banco de dados!")
}).catch(function(erro){
    console.log("falha ao conectar :" + erro)
})//then e catch serve para quando de certo ou errado


//template engine
app.engine("handlebars", handlebars.engine({defaultLayout: "main"}))
app.set("view engine", "handlebars")


app.get("/formulario", function(req,res){
    res.render("formulario")//chamando a pagina formulario do handlebars
})



app.listen(port, () =>{
    console.log(`Server rodando na porta ${port}/`);
});
//fazer o servidor ficar online         
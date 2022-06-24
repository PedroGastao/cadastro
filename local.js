const http = require("http")
const express = require("express");
const app = express();
const port = 3000;
const handlebars = require("express-handlebars") 
const bodyParser = require('body-parser')


//a localização do banco e qual banco
sequelize.authenticate().then(function(){
    console.log("conectado ao Banco de dados!")
}).catch(function(erro){
    console.log("falha ao conectar :" + erro)
})//then e catch serve para quando de certo ou errado

//body parser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//template engine
app.engine("handlebars", handlebars.engine({defaultLayout: "main"}))
app.set("view engine", "handlebars")


app.get("/formulario", function(req,res){
    res.render("formulario")//chamando a pagina formulario do handlebars
})

app.post("/dados", function(req,res){
    res.send("Enviado")
})// rota de recebimento dos dados do formulario



app.listen(port, () =>{
    console.log(`Server rodando na porta ${port}/`);
});
//fazer o servidor ficar online         
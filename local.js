const http = require("http")
const express = require("express");
const app = express();
const port = 3000;
const handlebars = require("express-handlebars") 
const bodyParser = require('body-parser')
const cadastro = require("./modules/infoCad")

//body parser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//template engine
app.engine("handlebars", handlebars.engine({defaultLayout: "main"}))
app.set("view engine", "handlebars")


app.get("/formulario", function(req,res){
    res.render("formulario")//chamando a pagina formulario do handlebars
})

app.get("/enviado", function(req,res){
    cadastro.findAll().then(function(dados){
        res.render("enviado", {Dados: dados})
    })
})

app.post("/dados",function(req,res){
    cadastro.create({
        nome: req.body.usuario_nome,
        cpf: req.body.usuario_cpf,
        email: req.body.usuario_email,
        telefone: req.body.usuario_telefone,
        nascimento: req.body.usuario_dataNascimento
    }).then(function(){
        res.redirect("/enviado") //redireciona a pagina
    }).catch(function(erro){
        res.send("Falha ao Enviar Dados!! " + erro)
    })
})// enviando os dados do formulario

app.get("/delete/:id", function(req,res){
    cadastro.destroy({where: {"id": req.params.id}}).then(function(){
        res.send("Cadastro Apagado!")
    }).catch(function(erro){
        res.send("Erro ao apagar cadastro! " + erro)
    })
})// deletar um cadastro

app.listen(port, () =>{
    console.log(`Server rodando na porta ${port}/`);
});
//fazer o servidor ficar online         
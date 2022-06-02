const http = require("http")
const express = require("express");
const app = express();
const port = 3000;

app.get("/",(req,res)=>{
    res.send("Enviado!");
});

app.get("/formulario/:nome",(req,res)=>{
    res.sendFile(__dirname + "/index.html")
    //res, serve para mandar algo
    //senFile, para carregar algum arquivo html
    
})




app.listen(port, () =>{
    console.log(`Server rodando na porta ${port}/`);
});
//fazer o servidor ficar online         
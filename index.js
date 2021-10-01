const { Router } = require("express")
const express = require("express")
const rotasProdutos = require("./rotas/rotasProdutos")
let app = express()

app.get('/',(req,res) => {
    res.send("Server ligado!")
})

// Rotas Parametrizadas

// app.get("/produtos/:id?",(req,res) =>{
//   let {id} = req.params;
//    res.send("eu quero o produto com id: " + id)
// })

// =========

// Router

app.use("/produtos", rotasProdutos);


// ========


app.listen(3000)
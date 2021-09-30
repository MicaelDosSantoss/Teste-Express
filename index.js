const express = require("express")

let app = express()

app.get('/',(req,res) => {
    res.send("Server ligado!")
})

// Rotas Parametrizadas

app.get("/produtos/:id?",(req,res) =>{
  let {id} = req.params;
   res.send("eu quero o produto com id: " + id)
})

// =========


app.listen(3000)
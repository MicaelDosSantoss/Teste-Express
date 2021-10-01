const express = require('express')
const controle = require("../Controllers/produtoControle")
// para usar o router deve usar o seguinte comando , esse comando consegue usar as rotas do express.

const router = express.Router();

router.get("/criar",controle.criarProduto )
router.get("/deletar/:id", controle.deletar)

module.exports = router;

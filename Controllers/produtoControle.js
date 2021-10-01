const produtoControle = {
    criarProduto: (req,res)=>{
        res.send("Criando um Produto")
    },
    deletar: (req,res) =>{
        const {id} = req.params;
        res.send(id + " Deletado")
    }
}

module.exports = produtoControle
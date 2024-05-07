const Produto = require('../models/produto')

async function getAll(req, res) {
    const produtos = await Produto.find()
    res.json(produtos)
}

async function create(req, res) {
    try {
        const produto = new Produto(req.body)
        const produtoCriado = await produto.save()
        res.status(201).json(produtoCriado)
    } catch (error) {
        console.log(error)
        res.status(500).json(
            {
                mensagem: "Ocorreu um erro ao cadastrar produto",
                erro: error
            }
        )
    }
}

// -> PARA CASA
// getById
// update
// delete

module.exports = {
    getAll,
    create
}
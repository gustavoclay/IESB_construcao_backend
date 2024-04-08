const express = require('express')

const router = express.Router()

let listaProdutos = [
    {
        id: 1,
        nome: "Arroz",
        preco: 29.99
    }
]

// READ -> Buscar todos os produtos
router.get('/produtos', (req, res) => {
    res.status(200).json(listaProdutos)
})

// READ -> Busca de produto especifico
router.get('/produtos/:id', (req, res) => {
    const id = req.params.id
    const produto = listaProdutos.find(produto => produto.id == id)
    if (produto) {
        res.status(200).json(produto)
    } else {
        res.status(404).json({ mensagem: "Produto não encontrado!" })
    }
})


// CREATE -> Cadastro de um produto
router.post('/produtos', (req, res) => {
    const dados = req.body

    if (!dados.nome || !dados.preco) {
        res.status(400).json({ mensagem: "Nome e preço são obrigatórios" })
    } else {
        const produto = {
            id: Math.round(Math.random() * 1000),
            nome: dados.nome,
            preco: dados.preco
        }

        listaProdutos.push(produto)

        res.status(201).json({ mensagem: "Produto cadastrado com sucesso!" })
    }
})







module.exports = router
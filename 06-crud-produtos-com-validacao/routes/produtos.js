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

        res.status(201).json(
            {
                mensagem: "Produto cadastrado com sucesso!",
                produto
            }
        )
    }
})

// UPDATE -> Alterar um produto
router.put('/produtos/:id', (req, res) => {
    const id = req.params.id
    const novosDados = req.body

    if (!novosDados.nome || !novosDados.preco) {
        res.status(400).json({ mensagem: "Nome e preço são obrigatórios!" })
    } else {

        const index = listaProdutos.findIndex(produto => produto.id == id)
        if (index == -1) {
            res.status(404).json({ mensagem: "Produto não encotrado!" })
        } else {
            const produto = {
                id: Number(id),
                nome: novosDados.nome,
                preco: novosDados.preco
            }

            listaProdutos[index] = produto

            res.status(200).json(
                {
                    mensagem: "Produto alterado com sucesso!",
                    produto
                }
            )
        }
    }
})

// DELETE -> Excluir produto
router.delete('/produtos/:id', (req, res) => {
    const id = req.params.id
    const index = listaProdutos.findIndex(produto => produto.id == id)
    if (index == -1) {
        res.status(404).json({ mensagem: "Produto não encontrado!" })
    } else {
        listaProdutos.splice(index, 1)
        res.status(200).json({ mensagem: "Produto excluido sucesso!" })
    }



})







module.exports = router
const express = require('express')

const router = express.Router()

let listaCarros = [
    {
        id: 1,
        marca: "VW",
        modelo: "Gol",
        cor: "Rosa",
        valor: 80000.99
    },
    {
        id: 2,
        marca: "Renault",
        modelo: "Kwid",
        cor: "Branco",
        valor: 72000.99
    }
]

// READ -> Buscar todos os carros
router.get('/carros', (req, res) => {
    res.json(listaCarros)
})

// READ -> Buscar de carros por id
router.get('/carros/:id', (req, res) => {
    const id = req.params.id
    const carro = listaCarros.find(carro => carro.id == id)
    if (carro) {
        return res.json(carro)
    }
    return res.status(404).json({ mensagem: "Carro não encontrado!" })
})

// CREATE -> cadastrar um carro
router.post('/carros', (req, res) => {
    const corpo = req.body

    if (!corpo.marca || !corpo.modelo || !corpo.cor || !corpo.valor) {
        return res.status(400).json({ mensagem: "Campos marca, modelo, cor e valor são obrigatórios" })
    }

    const carro = {
        id: Math.round(Math.random() * 1000),
        marca: corpo.marca,
        modelo: corpo.modelo,
        cor: corpo.cor,
        valor: corpo.valor
    }

    listaCarros.push(carro)
    return res.status(201).json({
        mensagem: "Carro criado com sucesso!",
        carro
    })
})

// UPDATE -> Atualizar um carro
router.put("/carros/:id", (req, res) => {
    const id = req.params.id
    const corpo = req.body

    if (!corpo.marca || !corpo.modelo || !corpo.cor || !corpo.valor) {
        return res.status(400).json({ mensagem: "Campos marca, modelo, cor e valor são obrigatórios" })
    }

    const index = listaCarros.findIndex(carro => carro.id == id)
    if (index == -1) {
        return res.status(404).json({ mensagem: "Carro não encontrado!" })
    }

    const carroAtualizado = {
        id: Number(id),
        marca: corpo.marca,
        modelo: corpo.modelo,
        cor: corpo.cor,
        valor: corpo.valor
    }

    listaCarros[index] = carroAtualizado

    return res.json({
        mensagem: "Carro atualizado com sucesso!",
        carroAtualizado
    })
})

// DELETE -> Excluir um carro
router.delete('/carros/:id', (req, res) => {
    const id = req.params.id
    const index = listaCarros.findIndex(carro => carro.id == id)
    if (index == -1) {
        return res.status(404).json({ mensagem: "Carro não encontrado!" })
    }
    listaCarros.splice(index, 1)
    res.json({ mensagem: `O Carro ${id} foi excluido com sucesso!` })
})

// READ ->  Filtrar carros por cor
router.get('/carros/cor/:cor', (req, res) => {
    const cor = req.params.cor
    const carrosPorCor = listaCarros.filter(carro => carro.cor.toUpperCase() == cor.toUpperCase())
    res.json(carrosPorCor)
})

// READ -> Buscar o valor total de todos os carros por cor
router.get('/carros/cor/:cor/valor-total', (req, res) => {
    const cor = req.params.cor
    const carrosPorCor = listaCarros.filter(carro => carro.cor.toUpperCase() == cor.toUpperCase())

    let valorTotal = 0

    carrosPorCor.forEach(carro => {
        valorTotal = valorTotal + carro.valor
    })

    res.json({
        quantidadeCarros: carrosPorCor.length,
        valorTotal: valorTotal.toFixed(2)
    })
})










module.exports = router

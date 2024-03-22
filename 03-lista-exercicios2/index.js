const express = require('express')
const app = express()

// middlewares -> instermediarios
app.use(express.json())

// logica -> contrato com os exercicios

// 1. Faça uma api para calcular o estoque médio de uma peça, sendo que ESTOQUE MÉDIO = (QUANTIDADE MÍNIMA + QUANTIDADE MÁXIMA) /2.
// PATH PARAM
app.get('/exercicio1/:qtdMinima/:qtdMaxima', (req, res) => {
    const quantidadeMinima = Number(req.params.qtdMinima)
    const quantidadeMaxima = Number(req.params.qtdMaxima)

    const estoqueMedio = (quantidadeMinima + quantidadeMaxima) / 2

    res.send(`Estoque Médio: ${estoqueMedio}`)
})

// QUERY PARAM
app.get('/exercicio1', (req, res)=>{
    const quantidadeMinima = Number(req.query.qtdMinima)
    const quantidadeMaxima = Number(req.query.qtdMaxima)

    const estoqueMedio = (quantidadeMinima + quantidadeMaxima) / 2

    res.send(`Estoque Médio: ${estoqueMedio}`)
})

// BODY
app.post('/exercicio1', (req, res) => {
    const quantidadeMinima = req.body.qtdMinima
    const quantidadeMaxima = req.body.qtdMaxima

    const estoqueMedio = (quantidadeMinima + quantidadeMaxima) / 2

    res.send(`Estoque Médio: ${estoqueMedio}`)
})






app.listen(3000, () => {
    console.log("Aplicação iniciada em http://localhost:3000")
})

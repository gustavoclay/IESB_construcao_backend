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


/* 

 7. Faça uma api para ler o código e o preço de 15 produtos, calcular e escrever:
    • O maior preço lido; e
    • A média aritmética dos preços dos produtos.

    ex. de corpo da requisição:

[
    {
        "nome": "Porcelanato",
        "codigo": 1,
        "preco": 20.36
    },
    {
        "nome": "Cimento",
        "codigo": 2,
        "preco": 40.76
    },
        {
        "nome": "Argamassa",
        "codigo": 3,
        "preco": 50.76
    },
    ...
]
 */
app.post("/exercicio7", (req, res) => {
    const corpo = req.body
    let listaProdutos = []
    
    corpo.forEach(produto => {
        listaProdutos.push(produto)
    });

    let soma = 0
    listaProdutos.forEach(produto => {
        soma = soma + produto.preco
    })

    const media = soma / listaProdutos.length

    // calcular o maiorPreco
    let maiorPreco = 0
    // logica
    listaProdutos.forEach(produto => {
        if (produto.preco > maiorPreco){
            maiorPreco = produto.preco
        }
    })

    const resultado = {
        precoMedio: media.toFixed(2),
        maiorPreco: maiorPreco
    }
    res.json(resultado)
})


app.listen(3000, () => {
    console.log("Aplicação iniciada em http://localhost:3000")
})

// Criando uma instância do modulo express
const express = require('express')
// Criando nossa aplicação
const app = express()

// Definindo os caminhos da aplicação
app.get('/', (req, res) => {
    res.send("Olá mundo")
})

app.get('/hello', (req, res) => {
    res.send("Hello World")
})

app.get('/nome', (req, res) => {
    res.send("Gustavo Clay")
})

// CRIA UM ENDPOINT QUE DEVOLVA SEU NOME E MATRICULA /ALUNO
// app.get('/aluno', (req, res) => {
//     res.send("NOME: Gustavo Clay MATRICULA: 00000001")
// })


app.get('/teste', (req, res) => {
    res.send("Teste GET QUALQUER ALTERACAO OK")
})

app.post('/teste', (req, res) => {
    res.send("Teste POST OK")
})

// PATH PARAMS -> :nome
app.get('/aluno/:nome/:matricula/:curso', (req, res) => {
    console.log(req.params)
    res.send(`
    Olá ${req.params.nome},
    sua matricula é ${req.params.matricula},
    seu curso é ${req.params.curso}
    `)
})

// QUERY PARAMS
app.get('/pessoa', (req, res) => {
    console.log(req.query)
    res.send("OK")
})


// 1. Faça um Programa que receba quatro notas de um aluno, calcule e imprima a média aritmética das notas e a mensagem de aprovado para média superior ou igual a 7.0 ou a mensagem de reprovado para média inferior a 7.0.
app.get('/aluno', (req, res) => {
    console.log(req.query)
    const nota1 = Number(req.query.nota1)
    const nota2 = Number(req.query.nota2)
    const nota3 = Number(req.query.nota3)
    const nota4 = Number(req.query.nota4)

    const media = (nota1 + nota2 + nota3 + nota4) / 4

    const resultado = media >= 7 ? "Aprovado" : "Reprovado"

    res.send(`
        Media: ${media.toFixed(1)}
        Resultado: ${resultado}
    `)
})



// executando a aplicaçao na porta definida
app.listen(3000, () => {
    console.log(`Api iniciada! Rodando em http://localhost:3000`)
})

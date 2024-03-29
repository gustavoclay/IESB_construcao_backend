// IMPORTS
const express = require('express')
const tutorial = require('./routes/tutorial')
const subrota = require('./routes/subrota')
const contatos = require('./routes/contatos')

// CONFIGURACAO
const app = express()

// MIDDLEWARES
// middleware que transforma o corpo da requisição em objeto json
// dentro da nossa aplicação
app.use(express.json())

// ROTAS
// trazendo as rotas do modulo tutorial pra dentro da minha aplicação
app.use(tutorial)
// tranzendo as rotas do modulo subrota
app.use('/rota', subrota)
// trazendo as rotas do modulo contatos
app.use(contatos)

// contrato -> configuração das rotas e da lógica
app.get("/", (req, res) => {
    res.send("Aplicação rodando!!!")
})

// START
// start da nossa aplicação na porta 3000
app.listen(3000, () => {
    console.log("Api rodando em http://localhost:3000")
})
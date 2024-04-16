const express = require('express')

const app = express()

// middlewares
// que transforma o corpo da requisição em objeto json
app.use(express.json())
// que faz o rateamento para as rotas do CRUD de carros
const carrosRouter = require('./routes/carros')
app.use(carrosRouter)

app.listen(3000, () => {
    console.log("Aplicação rodando em http://localhost:3000")
})


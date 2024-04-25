const express = require('express')
const app = express()

app.use(express.json())

//rota
const livrosRouter = require('./routes/livros')
app.use(livrosRouter)

app.listen(3000, () => {
    console.log("Aplicação rodando em http://locahost:3000")
})
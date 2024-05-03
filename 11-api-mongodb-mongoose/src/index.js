const express = require('express')
const app = express()
const PORT = 3000
const mongoose = require('mongoose')
require('dotenv').config()

// Conexão com o MongoDB
const DB_USERNAME = process.env.DB_USERNAME
const DB_PASSWORD = process.env.DB_PASSWORD

mongoose.connect(`mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@minhaapi.rn8e1vu.mongodb.net/?retryWrites=true&w=majority`)
    .then(() => console.log("Conectado ao banco Mongo"))
    .catch((err) => console.log("Erro ao conectar no Mongo: ", err))

// Middlewares
app.use(express.json())

// DB Modelos
const Tarefa = mongoose.model('tarefa', { nome: String })

// Rotas
app.get('/', (req, res) => {
    res.json("Hello")
})

app.get('/tarefas', async (req, res) => {
    const tarefas = await Tarefa.find()
    res.json(tarefas)
})

app.get('/tarefas/:id', async (req, res) => {
    const tarefa = await Tarefa.findById(req.params.id)
    res.json(tarefa)
})

app.post('/tarefas', async (req, res) => {
    const tarefa = new Tarefa({ nome: req.body.nome })
    await tarefa.save()
    res.json(tarefa)
})

app.put('/tarefas/:id', async (req, res) => {
    const tarefa = await Tarefa.findByIdAndUpdate(req.params.id, { nome: req.body.nome }, { new: true })
    res.json(tarefa)
})

app.delete('/tarefas/:id', async (req, res) => {
    await Tarefa.findByIdAndDelete(req.params.id)
    res.json()
})


app.listen(PORT, () => {
    console.log(`Aplicação rodando na porta ${PORT}`)
})
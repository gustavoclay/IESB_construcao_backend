// importa o modulo do express
const express = require('express')
// criando um router
const router = express.Router()

// crio as rotas e as lógicas
router.get('/tutorial', (req, res) => {
    res.send("Tutorial GET")
})

router.post('/tutorial', (req, res) => {
    res.send("Tutorial POST")
})

router.put('/tutorial', (req, res) => {
    res.send("Tutorial PUT")
})

router.delete('/tutorial', (req, res) => {
    res.send("Tutorial DELETE")
})

// exporto o router
module.exports = router

// este router tbm é um middleware 


const express = require('express')
const router = express.Router()

const ProdutoController = require('../controllers/ProdutoController')

router.get('/', (req, res) => {
    res.json("OK")
})

// Rotas de Produtos
router.get('/produtos', ProdutoController.getAll)
router.post('/produtos', ProdutoController.create)



module.exports = router
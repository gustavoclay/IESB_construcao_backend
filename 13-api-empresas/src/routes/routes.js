const express = require('express')
const router = express.Router()

const CargoController = require('../controllers/CargoController')

// Cargos
router.post('/cargos', CargoController.create)








module.exports = router
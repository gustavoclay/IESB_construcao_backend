const express = require('express')
const router = express.Router()

const CargoController = require('../controllers/CargoController')

// Cargos
router.post('/cargos', CargoController.create)
router.get('/cargos', CargoController.getAll)
router.get('/cargos/:id', CargoController.getById)
router.put('/cargos/:id', CargoController.update)
router.delete('/cargos/:id', CargoController.remove)





module.exports = router
const express = require('express')
const router = express.Router()

// controllers
const CargoController = require('../controllers/CargoController')
const FuncionarioController = require('../controllers/FuncionarioController')

// validators
const { cargoValidador } = require('../validators/CargoValidator')

// Cargos
router.post('/cargos', cargoValidador, CargoController.create)
router.get('/cargos', CargoController.getAll)
router.get('/cargos/:id', CargoController.getById)
router.put('/cargos/:id', CargoController.update)
router.delete('/cargos/:id', CargoController.remove)

// Funcionarios
router.post('/funcionarios', FuncionarioController.create)
router.get('/funcionarios', FuncionarioController.getAll)
router.get('/funcionarios/:id', FuncionarioController.getById)
router.put('/funcionarios/:id', FuncionarioController.update)
router.delete('/funcionarios/:id', FuncionarioController.remove)


module.exports = router
const express = require('express')
const router = express.Router()

// controllers
const CargoController = require('../controllers/CargoController')
const DepartamentoController = require('../controllers/DepartamentoController')
const FuncionarioController = require('../controllers/FuncionarioController')
const ProjetoController = require('../controllers/ProjetoController')
const TarefaController = require('../controllers/TarefaController')

// validators
const { validarId } = require('../validators/IdValidator')
const { cargoValidador } = require('../validators/CargoValidator')
const { departamentoValidador } = require('../validators/DepartamentoValidator')
const { funcionarioValidador } = require('../validators/FuncionarioValidator')
const { projetoValidador } = require('../validators/ProjetoValidator')
const { tarefaValidador } = require('../validators/TarefaValidator')

// Cargos
router.post('/cargos', cargoValidador, CargoController.create)
router.get('/cargos', CargoController.getAll)
router.get('/cargos/:id', validarId, CargoController.getById)
router.put('/cargos/:id', validarId, cargoValidador, CargoController.update)
router.delete('/cargos/:id', validarId, CargoController.remove)

// Departamentos
router.post('/departamentos', departamentoValidador, DepartamentoController.create)
router.get('/departamentos', DepartamentoController.getAll)
router.get('/departamentos/:id', validarId, DepartamentoController.getById)
router.put('/departamentos/:id', validarId, departamentoValidador, DepartamentoController.update)
router.delete('/departamentos/:id', validarId, DepartamentoController.remove)

// Funcionarios
router.post('/funcionarios', funcionarioValidador, FuncionarioController.create)
router.get('/funcionarios', FuncionarioController.getAll)
router.get('/funcionarios/:id', validarId, FuncionarioController.getById)
router.put('/funcionarios/:id', validarId, funcionarioValidador, FuncionarioController.update)
router.delete('/funcionarios/:id', validarId, FuncionarioController.remove)

// Projetos
router.post('/projetos', projetoValidador, ProjetoController.create)
router.get('/projetos', ProjetoController.getAll)
router.get('/projetos/:id', validarId, ProjetoController.getById)
router.put('/projetos/:id', validarId, projetoValidador, ProjetoController.update)
router.delete('/projetos/:id', validarId, ProjetoController.remove)

// Tarefas
router.post('/tarefas', tarefaValidador, TarefaController.create)
router.get('/tarefas', TarefaController.getAll)
router.get('/tarefas/:id', validarId, TarefaController.getById)
router.put('/tarefas/:id', validarId, tarefaValidador, TarefaController.update)
router.delete('/tarefas/:id', validarId, TarefaController.remove)


module.exports = router
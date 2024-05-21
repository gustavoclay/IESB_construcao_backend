const express = require('express')
const router = express.Router()

const AutenticacaoController = require('../controllers/AutenticacaoController')

const { usuarioValidador, loginValidador } = require('../validators/AutenticacaoValidator')


router.post('/auth/registro', usuarioValidador, AutenticacaoController.registrar)

router.post('/auth/login', loginValidador, AutenticacaoController.login)


module.exports = router

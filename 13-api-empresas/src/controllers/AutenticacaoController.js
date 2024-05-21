require('dotenv').config()
const Usuario = require('../models/Usuario')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const JWT_SECRET = process.env.JWT_SECRET

async function registrar(req, res) {
    const { nome, email, senha } = req.body

    const usuarioExiste = await Usuario.findOne({ email })
    if (usuarioExiste) {
        return res.status(400).json({ mensagem: "usuário já existe!" })
    }

    const hash = await bcrypt.hash(senha, 10)

    const usuario = new Usuario({
        nome,
        email,
        senha: hash
    })

    await usuario.save()

    res.status(201).json({ mensagem: "Usuário cadastrado com sucesso!" })
}

async function login(req, res) {

    const { email, senha } = req.body

    const usuario = await Usuario.findOne({ email })

    if (!usuario) {
        return res.status(401).json({ mensagem: "Usuário não cadastrado!" })
    }

    const senhaValida = await bcrypt.compare(senha, usuario.senha)

    if (!senhaValida) {
        return res.status(401).json({ mensagem: "usuário ou senha inválidos!" })
    }

    const token = jwt.sign({ email: usuario.email }, JWT_SECRET, { expiresIn: '10m' })

    res.json(
        {
            mensagem: "Login efetuado com sucesso!",
            token
        }
    )
}






module.exports = {
    registrar,
    login
}
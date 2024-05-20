const Usuario = require('../models/Usuario')
const bcrypt = require('bcrypt')


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





module.exports = {
    registrar
}
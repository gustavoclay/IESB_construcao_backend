const Funcionario = require('../models/Funcionario')

async function create(req, res) {
    try {
        const funcionario = new Funcionario(req.body)
        const funcionarioCriado = await funcionario.save()
        res.status(201).json(funcionarioCriado)
    } catch (error) {
        console.error("Erro ao criar funcionario: ", error)
        res.status(400).json(
            {
                mensagem: "Erro ao criar funcionario!",
                erro: error.message
            }
        )
    }
}

async function getById(req, res) {
    const funcionario = await Funcionario.findById(req.params.id).populate('cargo')
    if (funcionario) {
        res.json(funcionario)
    } else {
        res.status(404).json({ mensagem: "Funcionario não encontrato!" })
    }
}

async function getAll(req, res) {
    res.json(await Funcionario.find())
}

async function update(req, res) {
    try {
        const funcionario = await Funcionario.findByIdAndUpdate(req.params.id, req.body)
        res.json(funcionario)
    } catch (error) {
        console.error("Erro ao criar funcionario: ", error)
        res.status(400).json({
            mensagem: "Erro ao atualizar funcionario!",
            erro: error.message
        })
    }
}

async function remove(req, res) {
    await Funcionario.findByIdAndDelete(req.params.id)
    res.json({ mensagem: "Funcionario excluido com sucesso!" })
}

// atualizacao, detele, buscatodos
module.exports = {
    create,
    getById,
    getAll,
    update,
    remove
}
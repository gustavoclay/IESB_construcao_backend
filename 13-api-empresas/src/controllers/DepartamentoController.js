const Departamento = require('../models/Departamento')

async function create(req, res) {
    const departamento = new Departamento(req.body)
    const departamentoCriado = await departamento.save()
    res.status(201).json(departamentoCriado)
}

async function getAll(req, res) {
    res.json(await Departamento.find())
}

async function getById(req, res) {
    const departamento = await Departamento.findById(req.params.id)
    if (departamento) {
        res.json(departamento)
    } else {
        res.status(404).json({ mensagem: "Departamento não encontrato!" })
    }
}

async function update(req, res) {
    const departamentoAtualizado = await Departamento.findByIdAndUpdate(req.params.id, req.body, { new: true })
    if (departamentoAtualizado) {
        res.json(departamentoAtualizado)
    } else {
        res.status(404).json({ mensagem: "Departamento não encontrato!" })
    }

}

async function remove(req, res) {
    const departamentoExcluido = await Departamento.findByIdAndDelete(req.params.id)
    if (departamentoExcluido) {
        res.json({
            mensagem: "Departamento excluido com sucesso!",
            departamentoExcluido
        })
    } else {
        res.status(404).json({ mensagem: "Departamento não encontrato!" })
    }
}


module.exports = {
    create,
    getAll,
    getById,
    update,
    remove
}
const Cargo = require('../models/Cargo')

async function create(req, res) {
    try {
        const cargo = new Cargo(req.body)
        const cargoCriado = await cargo.save()
        res.status(201).json(cargoCriado)
    } catch (error) {
        console.error("Erro ao criar cargo: ", error)
        res.status(400).json({
            mensagem: "Erro ao criar cargo!",
            erro: error.message
        })
    }
}

async function getAll(req, res) {
    res.json(await Cargo.find())
}

async function getById(req, res) {
    const cargo = await Cargo.findById(req.params.id)
    if (cargo) {
        res.json(cargo)
    } else {
        res.status(404).json({ mensagem: "Cargo não encontrato!" })
    }
}

async function update(req, res) {
    try {
        const cargoAtulizado = await Cargo.findByIdAndUpdate(req.params.id, req.body)
        res.json(cargoAtulizado)
    } catch (error) {
        console.error("Erro ao criar cargo: ", error)
        res.status(400).json({
            mensagem: "Erro ao atualizar cargo!",
            erro: error.message
        })
    }
}

async function remove(req, res) {
    await Cargo.findByIdAndDelete(req.params.id)
    res.json({ mensagem: "Cargo excluido com sucesso!" })
}


module.exports = {
    create,
    getAll,
    getById,
    update,
    remove
}
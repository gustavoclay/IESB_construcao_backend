const mongoose = require('mongoose')

const schema = new mongoose.Schema(
    {
        nome: {
            type: String,
            required: true
        },
        dataNascimento: {
            type: Date,
            required: true
        },
        email: {
            type: String,
            required: true,
            lowercase: true,
            trim: true,
            unique: true
        },
        cargo: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'cargo',
            required: false
        }
    },
    {
        timestamps: true
    }
)

const Funcionario = mongoose.model('funcionario', schema)

module.exports = Funcionario
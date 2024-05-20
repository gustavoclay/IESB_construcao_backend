const yup = require('yup')

const schema = yup.object().shape({
    titulo: yup
        .string('campo precisa ser uma texto')
        .required('campo obrigatório'),
    descricao: yup
        .string('campo precisa ser uma texto'),
    dataInicio: yup
        .date('Data inválida'),
    dataFim: yup
        .date('Data inválida'),
    funcionario: yup
        .string('campo precisa ser um texto'),
    projeto: yup
        .string('campo precisa ser um texto'),

})

function tarefaValidador(req, res, next) {
    schema
        .validate(req.body, { abortEarly: false })
        .then(() => next())
        .catch(err => {
            console.log(err)
            const errors = err.inner.map(e => {
                const erro = {
                    campo: e.path,
                    erros: e.errors
                }
                return erro
            })
            res.status(400).json(
                {
                    mensagem: "Falha na validação dos campos",
                    erros: errors
                }
            )
        })
}

module.exports = {
    tarefaValidador
}
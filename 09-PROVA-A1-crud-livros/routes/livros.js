const express = require('express')
const router = express.Router()

const listaLivros = [
    {
        id: 1,
        titulo: "Livro 1",
        autor: "Arnaldo",
        editora: "Desenvolvedora",
        ano: 2020,
        preco: 30.90
    },
    {
        id: 2,
        titulo: "Livro 2",
        autor: "Arnaldo",
        editora: "Desenvolvedora",
        ano: 2021,
        preco: 40.90
    }
]


function validarLivro(req, res, next) {
    const id = req.params.id
    const livro = listaLivros.find(livro => livro.id == id)
    if (livro) {
        req.livro = livro
        next()
    } else {
        return res.status(404).json({ mensagem: "Livro não encontrado!" })
    }
}

function validarAtributos(req, res, next) {
    const dados = req.body
    if (!dados.titulo || !dados.autor || !dados.editora || !dados.ano || !dados.preco) {
        return res.status(400).json({ mensagem: "Todos os campos são obrigatórios!" })
    }
    next()
}

// - (0,5 pontos) Criar uma rota e implementação para busca de todos os livros (GET /livros)
router.get('/livros', (req, res) => {
    res.json(listaLivros)
})

// - (0,5 pontos) Na busca de livro por identificador, em caso de livro não encontrado, responder o status referente a NOT_FOUND (GET /livros/:id)
// - (0,5 pontos) Criar uma rota e implementação para busca de livro por identificador (GET /livros/:id)
router.get('/livros/:id', validarLivro, (req, res) => {
    res.json(req.livro)
})

// - (0,75 pontos) No cadastro de livro, todos os campos são obrigatórios; caso não seja enviado um ou mais campos, responder o status referente a BAD_REQUEST (POST /livros)
// - (1,0 pontos) Criar uma rota e implementação para cadastro de livro (POST /livros)
router.post('/livros', validarAtributos, (req, res) => {
    const dados = req.body

    const livro = {
        id: Math.round(Math.random() * 1000),
        titulo: dados.titulo,
        autor: dados.autor,
        editora: dados.editora,
        ano: dados.ano,
        preco: dados.preco
    }

    listaLivros.push(livro)

    res.status(201).json(
        {
            mensagem: "Livro criado com sucesso!",
            livro
        }
    )
})

// - (1,0 pontos) Criar uma rota e implementação para atualização de livro (PUT /livros/:id)
// - (0,5 pontos) Na atualização de livro, em caso de livro não encontrado, responder o status referente a NOT_FOUND (PUT /livros/:id)
// - (0,75 pontos) Na atualização de livro, todos os campos são obrigatórios; caso não seja enviado um ou mais campos, responder o status referente a BAD_REQUEST (PUT /livros/:id)
router.put('/livros/:id', validarAtributos, validarLivro, (req, res) => {
    const dados = req.body
    const livroAtual = req.livro

    const index = listaLivros.findIndex(livro => livro.id == livroAtual.id)

    const livroAtualizado = {
        id: livroAtual.id,
        titulo: dados.titulo,
        autor: dados.autor,
        editora: dados.editora,
        ano: dados.ano,
        preco: dados.preco
    }

    listaLivros[index] = livroAtualizado

    res.json(
        {
            mensagem: "Livro atualizado com sucesso!",
            livro: livroAtualizado
        }
    )
})

// - (0,5 pontos) Criar uma rota e implementação para exclusão de livro por identificador (DELETE /livros/:id)
// - (0,5 pontos) Na exclusão de livro por identificador, em caso de livro não encontrado, responder o status referente a NOT_FOUND (DELETE /livros/:id)
router.delete('/livros/:id', validarLivro, (req, res) => {
    const livroAtual = req.livro
    const index = listaLivros.findIndex(livro => livro.id == livroAtual.id)
    listaLivros.splice(index, 1)
    res.json({
        mensagem: "Livro excluido com sucesso!"
    })
})

//- (0,5 pontos) Criar uma rota e implementação para busca de todos os livros do mesmo autor (GET /livros/autor/:autor)
router.get('/livros/autor/:autor', (req, res) => {
    const autor = req.params.autor
    const livrosPorAutor = listaLivros.filter(livro => livro.autor.toLowerCase() == autor.toLowerCase())
    res.json(livrosPorAutor)
})

// - (1,0 pontos) Criar uma rota e implementação para calcular e retornar o preço médio de todos os livros da lista (GET /livros/preco/media)
router.get('/livros/preco/media', (req, res) => {

    let soma = 0
    listaLivros.forEach(livro => {
        soma = soma + livro.preco
    })

    const media = soma / listaLivros.length

    res.json({
        quantidade: listaLivros.length,
        media: media
    })

})








module.exports = router
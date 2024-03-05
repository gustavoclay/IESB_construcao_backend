// comentário de uma linha

/*
 comentário em bloco
 consigo passar varias linhas
 de informação
*/

// Impressão de informação no terminal
console.log('Testando impressão de informação no terminal')
console.error("testando console erro")
console.warn("testando console warn")

// criando variaveis com o var
var nome;
nome = "Gustavo Clay"
// nome = "Carlos Andrade"

console.log("Imprimindo variavel nome: ")
console.log(nome)

// let e const

// const (constante)
// criar uma varivável que não vai poder ser alterada
const primeiroNome = "Gustavo";
// primeiroNome = "Carlos" // não posso reatribuir variáveis constantes

console.log(primeiroNome)

// let
// criar varáveis que podem ser alteradas
let idade
idade = 20
idade = 30
idade = "Trinta"

console.log("Imprimindo o valor da variavel idade(com let)")
console.log(idade)

// Tipos de dados
// string
let nomeCompleto = "Gustavo Clay Lima"
nomeCompleto = 'Gustavo Clay Lima'

// let textoOla = "Olá " + nomeCompleto + ", tudo bem com você?" + "nfjajfhasjhf" + idade + "nkalnfklas";

// console.log(textoOla)


let textoOlaComTemplateString = `Olá ${nomeCompleto}, tudo bem com você?` // template string

console.log(textoOlaComTemplateString)


let nomeUsuario = "Gustavo Clay"
let idadeUsuario = 30
let cursoUsuario = "Análise e Desenvolvimento de Sistemas"

// template string
let pessoaComTemplateString = `
Olá ${nomeUsuario},
Sua idade é ${idadeUsuario},
Seu curso é ${cursoUsuario}.
IESB
` 

console.log(pessoaComTemplateString)

// Verificar o tipo de uma variável
console.log("Verificando o tipo da variável pessoaComTemplateString")
console.log(typeof pessoaComTemplateString)

// Tipo number 
let numeroInteiro = 2000
let numeroNegativo = -60
let numeroFlutuante = 25.90

// Tipo array
// let listaCheia = ["Wolkswagem", "Fiat", "Honda"]
// let listaCheiaMisturada = [1, 2, "Nome", null]
let lista = []

console.log(lista)

lista.push("PrimeiroItem")

console.log(lista)

lista.pop()

console.log(lista)

// Boolean
true
false

// Tipo object (Tipo objeto)

let pessoa = {
    nome: "Gustavo",
    idade: 20,
    curso: "ADS",
    semestre: "1/2024"
}

console.log("Imprimindo objeto pessoa")
console.log(pessoa)
console.log(typeof pessoa)
console.log(`Olá ${pessoa.nome}`)

// Tipos null
let telefone = null // ausência de valor

// Tipo undefined e NaN
let teste = 10 / "olá"
console.log(teste)

// Tratamento de dados (String)
let texto = "Gustavo Clay"
// .length // quantidade de caracteres do texto 
console.log(texto.length)
// texto em caixa alta
console.log(texto.toUpperCase())
//texto em caixa baixa
console.log(texto.toLowerCase())
// replace substituição
let valor = "10,50,"
console.log(valor)
valor = valor.replace(",", ".")
console.log(valor)


// tratamento de dados (number)
let numero = 10.777777777777777777777777777777
// fixar o numero de casas do numero flutuante
console.log(numero.toFixed(2))

// transformando float para inteiro
console.log(Number.parseInt(numero))

let numeroIntero = 10

// transformando inteiro para float
console.log(Number.parseFloat(numeroIntero).toFixed(2))

let valorEmDolar = 10.54

// console.log(valorEmDolar.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }))

// console.log(valorEmDolar.toLocaleString('pt-BR', { style: 'currency', currency: 'USD' }))


let idadeUser = "20"
console.log(Number(idadeUser))

console.log(Math.PI)
















































// comentário de uma linha
// dandkshahsahflaf

/* comentário de várias linhas (em bloco)
asdasdas
asdasdasda
dasdasdasdsada 
*/

// variável com var
var nome = "Gustavo"

// imprimir informação no console(terminal)
console.log("IMPRIMINDO UM TEXTO")
console.log(2)
console.log(nome)
console.log(1,2,3,4)
console.log("NOME:", "Gustavo")
console.log("NOME:", nome)
console.log("QUALQUER TEXTO" + " QUALQUER OUTRO TEXTO")
console.log(2 + 2)


// Tipos dados
var texto = "TESTE"
console.log("TIPO DA VARIAVEL texto: ",typeof texto)

var numero = 2
console.log("TIPO DA VARIAVEL numero: ", typeof numero)

var numeroFlutuante = 2.544444444
console.log("TIPO DA VARIAVEL numeroFlutuante: ", typeof numeroFlutuante)

var numeroNegativo = -2.544444444
console.log("TIPO DA VARIAVEL numeroNegativo: ", typeof numeroNegativo)

var boleano = true // ou false
console.log("TIPO DA VARIAVEL boleano: ", typeof boleano)

var array = [1,2,3,4,5]
console.log("TIPO DA VARIAVEL array: ", typeof array)

var testeAlteracao = "Um texto"
testeAlteracao = 2

console.log("testeAlteracao: ", testeAlteracao)


var arrayNumero = [1, 2, 3, 4, 5]
var arrayCarros = ["Gol", "Uno", "Civic"]
var arrayDinamico = [1, "Nome", true, {"nome": "Teste"}]


var pessoa = {
    "nome": "Gustavo",
    "idade": 18,
    "nacionalidade": "Brasileiro"
}
console.log(pessoa)
console.log(typeof pessoa)

const CONSTANTE = "CONSTANTE"
// CONSTANTE = "TESTE"

const notaA1 = 8
const notaA2 = 7

const media = notaA1 + notaA2 / 2


let aprovado = false

if(media >= 7) {
    aprovado = true
}



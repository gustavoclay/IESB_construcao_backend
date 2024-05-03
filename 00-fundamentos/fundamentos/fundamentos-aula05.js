//     Funções
// function executa() {
//     console.log("TESTE")
// }

// function soma(n1, n2) {
//     return n1 + n2;
// }

// const soma = (n1, n2) => {
//     return n1 + n2;
// }

// const soma = (n1, n2) => n1 + n2



// Função sem parametros e sem retorno
function executa() {
    console.log("Executando função executa")
}

// invocar uma funcao
// executa()
console.log("CHAMANDO FUNCAO soma antes de declarar")
soma(2,2)

// funcao com parametros e sem retorno
function soma(numA, numB) {
    console.log(numA + numB)
}

// soma(2, 2)
// soma(6, 8)

// console.log("CHAMANDO FUNCAO soma2 antes de declarar")
// soma2(2,2)
// não funciona

// funcao na variavel
const soma2 = function (numA, numB) {
    // console.log(numA + numB)
    return numA + numB
}

// soma2(2,2)
// soma2(6,8)


const resultado = soma2(2,2)
console.log("Resultado: ", resultado)

const multiplicar = (numA, numB) => {
    return numA * numB
}

console.log("CHAMANDO MULTIPLICAR")
console.log(multiplicar(10,1000))

const multiplicar2 = (numA, numB) => numA * numB

console.log("CHAMANDO MULTIPLICAR2")
console.log(multiplicar(20, 50))


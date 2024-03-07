// Condições
// if else

// if(condicao) {
//     acao
// }

// if (condicao) {
//     acao
// } else {
//     acao
// }

// if(condicao) {
//     acao
// } if (condicao) {
//     acao
// } else {
//     acao
// }


let nomeAluno = "Gustavo"
let idade = 16
let curso = "ADS"

// if(idade >= 18){
//     console.log("Aluno é maior de idade")
// } else {
//     console.log("Aluno é menor de idade")
// }

if(idade >= 18 || curso == "ADS"){
    console.log("Aluno válido")
}

if(nomeAluno == "Gustavo"){
    console.log("O nome é Gustavo")
} if(idade >= 18){
    console.log("Aluno maior de idade")
} if(curso == "ADS"){
    console.log("O Curso do aluno é ADS")
}

//  Repetições LOOP

// laço for
// for(inicialicação; condicao; incremento){

// }

for(let contador = 1; contador <= 10; contador = contador + 1) {
    console.log("Contador: ", contador)
    console.log("Loop")
    console.log("Teste")
    console.log("Testando")
}


for (let i = 1; i <= 10; i++) {
    console.log(i)
}




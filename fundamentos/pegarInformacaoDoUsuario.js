// https://www.codecademy.com/article/getting-user-input-in-node-js

// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// readline.question('Qual o seu nome?', nome => {
    
//     console.log("Olá");
//     console.log(nome);

//     readline.close();
// });

const prompt = require('prompt-sync') ();
const nome = prompt("Qual é o seu nome?");
console.log("Olá " + nome)

const idade = prompt("Qual é a sua idade?");
console.log("Você possui " + idade + " anos")
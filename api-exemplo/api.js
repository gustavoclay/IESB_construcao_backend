const server = require('http')

let contador = 0

server.createServer((req, res) => {

    contador++
    console.log("Contador de requisições: " + contador)
    res.write("Bem vindo ao meu backend! Contador de requisições: " + contador)
    res.end()


}).listen(3000)
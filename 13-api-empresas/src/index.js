const express = require('express')
const app = express()
const swaggerUi = require('swagger-ui-express')

const PORT = 3000

const DBconnection = require('./database/connection')
DBconnection()

app.use(express.json())

const swaggerFile = require('./swagger.json')
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))

const autenticacaoRoutes = require('./routes/autenticacao.routes')
app.use(autenticacaoRoutes)

const { checarToken } = require('./validators/AutenticacaoValidator')

const routes = require('./routes/routes')
app.use("/", checarToken, routes)

app.listen(PORT, () => {
    console.log(`Aplicação rodando na porta ${PORT}`)
})
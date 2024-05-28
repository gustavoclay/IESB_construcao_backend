const swaggerAutogen = require('swagger-autogen')({openapi: '3.0.0'});

const doc = {
    info: {
        title: 'Api-Empresas',
        description: 'Api de gerenciamento de projetos para uma empresa.',
        version: '3.0'
    },
    host: 'localhost:3000',
    securityDefinitions: {
        bearerAuth: {
            type: 'http',
            scheme: 'bearer',
            bearerFormat: 'JWT',
        },
    },
    security: [
        {
            bearerAuth: []
        }
    ]

};

const outputFile = './swagger.json';

const routes = ['./routes/autenticacao.routes.js', './routes/routes.js'];

swaggerAutogen(outputFile, routes, doc);


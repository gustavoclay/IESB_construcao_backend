### COMANDOS


```bash

# Iniciar projeto
npm init

# Instalar bibliotecas
npm install express
npm install nodemon

```

### AJUSTAR package.json

Criar o comando start com o nodemon no package.json

```json
{
  "name": "01-api-inicial",
  ...
  "scripts": {
    "start": "nodemon index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  ...
}

```

### RODAR O PROJETO

```bash
npm start
```

### LINKS

- https://nodejs.org/en
- https://expressjs.com/
- https://www.digitalocean.com/community/tutorials/workflow-nodemon-pt

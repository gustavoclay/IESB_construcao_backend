### BANCO DE DAODS

**OBS: Instruções para configuração do MongoDB Atlas completas no classroom.**

- Criar uma conta no MongoDB Atlas
https://www.mongodb.com/pt-br/cloud/atlas/register
- Crie um database
- Configure a segurança de rede
- Configure o usuário de acesso
- Pegar a url de acesso

### COMANDOS

```bash

# Iniciar projeto
npm init -y

# Instalar bibliotecas
npm install express nodemon mongoose dotenv

```

### AJUSTAR package.json

Criar o comando start com o nodemon no package.json

```json
{
  "main": "src/index.js",
  "scripts": {
    "start": "nodemon",
  ...
}

```

### RODAR O PROJETO

```bash
npm start
```

### VARIÁVEIS DE AMBIENTE

Criar o arquivo .env na raiz do projeto e adicionar as variáveis de ambiente

```
DB_USERNAME='usuario'
DB_PASSWORD='senha'
```

Importar as variaveis de ambiente no código

```js
require('dotenv').config()
DB_USERNAME = process.env.DB_USERNAME
DB_PASSWORD = process.env.DB_PASSWORD
```

### CONEXÃO COM O BANCO DE DADOS

Criar a pasta database e adicionar o arquivo index.js

```js
const mongoose = require('mongoose')

mongoose.connect(`mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@URL/${DB_NAME}?retryWrites=true&w=majority`)
    .then(() => console.log("Conectado ao MongoDB"))
    .catch((err) => console.log("Erro ao conectar no MongoDB: ", err))
```

### LINKS

- <https://nodejs.org/en>
- <https://expressjs.com/>
- <https://www.digitalocean.com/community/tutorials/workflow-nodemon-pt>
- <https://www.mongodb.com/pt-br>
- <https://mongoosejs.com/>

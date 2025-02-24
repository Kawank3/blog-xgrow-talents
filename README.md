# xgrow-blog

Blog criado utilizando React no front-end e Node.js no back-end.

##  Como executar o projeto

### Server
```
npm install
npx prisma generate
npm run dev
```

### Cliente
```
npm install
npm run dev
```
## Pacotes

### Server

- **@prisma/client** - Banco de Dados
- **bcrypt** - Encriptação de Senha
- **jsonwebtoken** - Autenticação
- **express** - Web Server
- **dotenv** - Variáveis de Ambiente

### Cliente

- **react** - Web Framework
- **react-dom** - Renderizador DOM
- **react-router-dom** - Rotas
- **@bytemd/react** - Markdown
- **@bytemd/plugin-highlight** - Markdown Syntax Highlight 
- **sonner** - Notificação

## Árvore de Arquivos

### Server
```
/server
├── index.js
├── package-lock.json
├── package.json
├── prisma
│   └── schema.prisma
└── src
    ├── controllers
    │   ├── auth.js
    │   └── post.js
    ├── middlewares
    │   └── validateToken.js
    ├── prisma.js
    └── routes
        ├── api.js
        ├── auth.js
        └── post.js
```

### Cliente

```
/client
├── index.html
├── package-lock.json
├── package.json
├── src
│   ├── App.jsx
│   ├── Context.jsx
│   ├── components
│   │   ├── Footer.jsx
│   │   ├── Nav.jsx
│   │   ├── PostCard.jsx
│   │   └── PrivateRoute.jsx
│   ├── index.css
│   ├── main.jsx
│   ├── markdown.css
│   └── pages
│       ├── Home.jsx
│       ├── Manage
│       │   ├── Create.jsx
│       │   ├── Posts.jsx
│       │   └── index.jsx
│       ├── Post.jsx
│       ├── SignIn.jsx
│       └── SignUp.jsx
└── vite.config.js
```

## Informações

### .env

```
# Environment variables declared in this file are automatically made available to Prisma.
# See the documentation for more detail: https://pris.ly/d/prisma-schema#accessing-environment-variables-from-the-schema

# Prisma supports the native connection string format for PostgreSQL, MySQL, SQLite, SQL Server, MongoDB and CockroachDB.
# See the documentation for all the connection string options: https://pris.ly/d/connection-strings

DATABASE_URL="mongodb+srv://weberbritogm:8ZdwTxa1W4vBoLzQ@kawan.sdnvx.mongodb.net/sample_mflix?retryWrites=true&w=majority&appName=Kawan"
#senha banco:8ZdwTxa1W4vBoLzQ
JWT_SECRET_USER="11c6590e82740cc0dfa699a84fa4c0a8e51fba90d206c06a3154590bd2a4e6d0"
```

### Contas

- **ADMIN**:
	- email: admin@email.com
	- senha: 12345678

    - email: kawan@email.com
    - senha: 12345678
- **USER**:
	- email: user@email.com
	- senha: 12345678

    - email: carlin06@email.com
    - senha: carlin06

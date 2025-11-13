
## ✅ MiniProjeto M2 — API To-Do List

Este projeto foi desenvolvido como parte do módulo 2 do curso, com o objetivo de praticar a criação de uma **API To-Do List** utilizando **Node.js**, **Express** e **Sequelize**.
A aplicação permite o cadastro, listagem, atualização e exclusão de tarefas, com integração a um banco de dados relacional (**SQLite** em desenvolvimento e **MySQL** em produção).
Os testes da API foram realizados utilizando o **Insomnia**.

---

### 🚀 Tecnologias utilizadas

* **Node.js**
* **Express**
* **Sequelize (ORM)**
* **SQLite** (ambiente de desenvolvimento)
* **MySQL** (produção/teste)
* **Dotenv** (para variáveis de ambiente)
* **Insomnia** (para testes das rotas da API)

---

### 📁 Estrutura de pastas

```
MiniProjeto-M2/
│
├── src/
│   ├── config/
│   │   └── config.js         # Configuração do Sequelize
│   ├── controllers/
│   │   └── TarefaController.js
│   ├── migrations/
│   ├── models/
│   │   └── Tarefa.js
│   ├── routes/
│   │   └── tarefaRoutes.js
│   ├── app.js
│   └── server.js
│
├── .env
├── .sequelizerc
├── package.json
└── README.md
```

---

### ⚙️ Configuração do ambiente

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/stellag2003/MiniProjeto---M2.git
   ```

2. **Entre na pasta do projeto:**

   ```bash
   cd MiniProjeto---M2
   ```

3. **Instale as dependências:**

   ```bash
   npm install
   ```

4. **Execute as migrations:**

   ```bash
   npx sequelize db:migrate
   ```

5. **Inicie o servidor:**

   ```bash
   npm start
   ```

---

### 🧠 Rotas principais

| Método | Rota           | Descrição               |
| ------ | -------------- | ----------------------- |
| POST   | `/tarefas`     | Cria uma nova tarefa    |
| GET    | `/tarefas`     | Lista todas as tarefas  |
| GET    | `/tarefas/:id` | Busca uma tarefa por ID |
| PUT    | `/tarefas/:id` | Atualiza uma tarefa     |
| DELETE | `/tarefas/:id` | Exclui uma tarefa       |

---

### 🧪 Exemplo de corpo (JSON)

**POST `/tarefas`**

```json
{
  "titulo": "Estudar Node.js",
  "descricao": "Praticar criação de APIs com Express",
  "status": "pendente"
}
```

---

### 📋 Exemplo de teste no Insomnia

Os testes foram feitos através do **Insomnia**, enviando requisições HTTP para as rotas da API.
Exemplo de retorno ao criar uma tarefa:

```json
{
  "id": 1,
  "titulo": "Estudar Node.js",
  "descricao": "Praticar criação de APIs com Express",
  "status": "pendente",
  "updatedAt": "2025-11-13T15:00:00.000Z",
  "createdAt": "2025-11-13T15:00:00.000Z"
}
```

---

### 💻 Scripts disponíveis

| Comando                     | Função                                       |
| --------------------------- | -------------------------------------------- |
| `npm start`                 | Inicia o servidor                            |
| `npm run dev`               | Inicia com nodemon (modo de desenvolvimento) |
| `npx sequelize db:migrate`  | Executa as migrations                        |
| `npx sequelize db:seed:all` | Executa os seeders (se houver)               |

---

### 🛠️ Desenvolvido por

**Stella Gonçalves**
💙 Projeto criado com o objetivo de aprendizado e prática de desenvolvimento backend com Node.js e Sequelize.

---

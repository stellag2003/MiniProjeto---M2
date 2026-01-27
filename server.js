const app = require("./src/app.js");
const db = require("./src/models");

const PORT = process.env.PORT || 3000;

db.sequelize
  .sync()
  .then(() => {
    console.log("Banco de dados sincronizado com sucesso!");
    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Falha ao sincronizar o banco de dados:", err);
  });

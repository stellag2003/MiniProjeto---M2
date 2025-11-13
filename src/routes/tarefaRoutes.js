const { Router } = require('express');
const TarefaController = require("../controllers/TarefaController.js");

const rota = Router();

rota
 .post("/tarefas", TarefaController.criaTarefas)
 .get("/tarefas", TarefaController.listaTarefas)
 .get("/tarefas/:id", TarefaController.buscaTarefasId)
 .put("/tarefas/:id", TarefaController.atualizaTarefas)
 .patch("/tarefas/:id/status", TarefaController.atualizaStatus)
 .delete("/tarefas/:id", TarefaController.excluiTarefa)

 module.exports = rota;
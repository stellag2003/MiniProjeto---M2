const { where } = require("sequelize");
const dataBase = require("../models");

class TarefaController {
  static criaTarefas = async (req, res, next) => {
    const tarefas = dataBase.Tarefa;
    try {
      let tarefa = new tarefas(req.body);

      const tarefaResultado = await tarefa.save();

      res.status(201).send(tarefaResultado.toJSON());
    } catch (erro) {
      next(erro);
    }
  };

  static listaTarefas = async (req, res, next) => {
    try {
      const tarefaResultado = await dataBase.Tarefa.findAll();
      res.status(200).json(tarefaResultado);
    } catch (error) {
      next(error);
    }
  };

  static buscaTarefasId = async (req, res, next) => {
    try {
      const { id } = req.params;
      const tarefa = await dataBase.Tarefa.findByPk(id);

      if (!tarefa) {
        return res.status(404).json({ mensagem: "Tarefa não encontrada" });
      }

      return res.status(200).json(tarefa);
    } catch (erro) {
      next(erro);
    }
  };

  static atualizaTarefas = async (req, res, next) => {
    try {
      const { id } = req.params;
      const novasInfos = req.body;

      const [linhasAfetadas] = await dataBase.Tarefa.update(novasInfos, {
        where: { id: id },
      });

      if (linhasAfetadas === 0) {
        return res.status(404).json({ mensagem: "Tarefa não encontrada" });
      }

      return res
        .status(200)
        .json({ mensagem: "Tarefa atualizada com sucesso!" });
    } catch (erro) {
      next(erro);
    }
  };

  static atualizaStatus = async (req, res, next) => {
    try {
      const { id } = req.params;
      const { status } = req.body;

      // 1. Busca a tarefa primeiro
      const tarefa = await dataBase.Tarefa.findByPk(id);

      if (!tarefa) {
        return res.status(404).json({ mensagem: "Tarefa não encontrada." });
      }

      // 2. Atualiza o campo (Cuidado: use "concluída" com acento se for o caso)
      tarefa.status = status;

      // 3. Salva no banco
      await tarefa.save();

      return res.status(200).json({ mensagem: "Status atualizado!", tarefa });
    } catch (erro) {
      next(erro);
    }
  };

  static excluiTarefa = async (req, res, next) => {
    try {
      const { id } = req.params;
      const tarefa = await dataBase.Tarefa.findByPk(id);
      if (!tarefa) {
        return res.status(404).json({ mensagem: "Tarefa não encontrada" });
      }

      await dataBase.Tarefa.destroy({ where: { id: id } });

      res.status(204).send({ message: "Tarefa removida com sucesso!" });
    } catch (erro) {
      next(erro);
    }
  };
}

module.exports = TarefaController;

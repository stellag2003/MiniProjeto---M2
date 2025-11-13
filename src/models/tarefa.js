"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Tarefa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Tarefa.init(
    {
      titulo: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: { msg: "O título é obrigatório!" },
        },
      },
      descricao: {
        type: DataTypes.STRING,
      },
      status: {
        type: DataTypes.ENUM("pendente", "em andamento", "concluido"),
        allowNull: false,
        defaultValue: "pendente",
        validate: {
          isIn: {
            args: [["pendente", "em andamento", "concluido"]],
            msg: "Status inválido. Use 'pendente', 'em andamento' ou 'concluido'.",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "Tarefa",
      tableName: "tarefas",
    }
  );

  return Tarefa;
};

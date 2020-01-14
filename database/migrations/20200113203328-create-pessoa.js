"use strict";

module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable("pessoa", {
      id_pessoa: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      cpf: {
        allowNull: false,
        type: DataTypes.STRING(11),
        unique: true
      },
      nome: {
        allowNull: false,
        type: DataTypes.STRING
      },
      idade: {
        allowNull: false,
        type: DataTypes.INTEGER
      },
      sexo: {
        allowNull: true,
        type: DataTypes.STRING(1)
      },
      telefone: {
        allowNull: true,
        type: DataTypes.STRING(11)
      },
      email: {
        allowNull: true,
        type: DataTypes.STRING,
        unique: true
      },
      status: {
        allowNull: true,
        type: DataTypes.BOOLEAN
      }
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable("pessoa");
  }
};

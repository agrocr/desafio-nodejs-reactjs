module.exports = (sequelize, DataTypes) => {
  const Pessoa = sequelize.define(
    "Pessoa",
    {
      cpf: DataTypes.STRING(11),
      nome: DataTypes.STRING,
      idade: DataTypes.INTEGER,
      sexo: DataTypes.STRING(1),
      telefone: DataTypes.STRING(11),
      email: DataTypes.STRING,
      ativo: DataTypes.BOOLEAN
    },
    {
      freezeTableName: true
    }
  );

  return Pessoa;
};

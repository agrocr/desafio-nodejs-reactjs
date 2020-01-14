module.exports = (sequelize, DataTypes) => {
  const Peoples = sequelize.define("pessoa", {
    cpf: DataTypes.STRING(11),
    nome: DataTypes.STRING,
    idade: DataTypes.INTEGER,
    sexo: DataTypes.STRING(1),
    telefone: DataTypes.STRING(11),
    email: DataTypes.STRING,
    status: DataTypes.BOOLEAN,
    email: DataTypes.STRING
  });

  return Peoples;
};

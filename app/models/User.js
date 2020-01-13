module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    cpf: DataTypes.STRING,
    nome: DataTypes.STRING,
    idade: DataTypes.INTEGER,
    sexo: DataTypes.STRING(1),
    telefone: DataTypes.STRING(11),
    email: DataTypes.STRING,
    status: DataTypes.BOOLEAN,
    email: DataTypes.STRING
  });

  return User;
};

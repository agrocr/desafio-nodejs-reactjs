module.exports = (sequelize, DataTypes) => {
  const People = sequelize.define("People", {
    name: DataTypes.STRING,
    gender: DataTypes.STRING,
    age: DataTypes.INTEGER
  });

  return People;
};

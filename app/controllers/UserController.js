// const sequelize = require("sequelize");

const { Pessoa } = require("../../app/models");

//Lista todos as pessoas
module.exports = {
  async allPeoples(req, res) {
    const pessoa = await Pessoa.findAll();

    return res.json(pessoa);
  }

  //Cria um usuário
  /* async createUser(req, res) {
    const peopleExists = await Peoples.findOne({
      where: { name: req.body.name }
    });
    console.log(peopleExists);

    if (peopleExists) {
      return res.status(400).json({ error: "People already exists." });
    }

    const emailExists = await User.findOne({
      where: { email: req.body.email }
    });
    console.log(emailExists);

    if (emailExists) {
      return res.status(400).json({ error: "Email already exists." });
    }

    const user = await User.create(req.body);
    console.log(user);

    return res.json({ user, message: "User successfully inserted" });
  } */
};

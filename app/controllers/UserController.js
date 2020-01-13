/* //const sequelize = require("sequelize");

const { User } = require("../../app/models");

//Lista todos os usuários
module.exports = {
  //Lista todos os usuários
  async allUsers(req, res) {
    const user = await User.findAll();

    return res.json(user);
  },

  //Cria um usuário
  async createUser(req, res) {
    const userExists = await User.findOne({ where: { name: req.body.name } });
    console.log(userExists);

    if (userExists) {
      return res.status(400).json({ error: "User already exists." });
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
  }
};
 */

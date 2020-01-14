//Importa model de pessoas
const { Pessoa } = require("../models");

module.exports = {
  //Listar todos os registros da tabela pessoa
  async allPeoples(req, res) {
    const people = await Pessoa.findAll();

    return res.json(people);
  },

  //Criar registro na tabela pessoa
  async createPeople(req, res) {
    const { cpf } = req.body;
    const { nome } = req.body;
    const { idade } = req.body;
    const { ativo } = req.body;

    //verifica se o cpf veio vazio na requisição
    if (!cpf) {
      return res.status(400).json({ error: "CPF is empty." });
    }

    //verifica se o nome veio vazio na requisição
    if (!nome) {
      return res.status(400).json({ error: "Nome is empty." });
    }

    //verifica se a idade veio vazio na requisição
    if (!idade) {
      return res.status(400).json({ error: "Idade is empty." });
    }

    //verifica se o ativo veio vazio na requisição
    if (!ativo) {
      return res.status(400).json({ error: "Ativo is empty." });
    }

    //Procura se cpf da requisição ja existe no banco
    const cpfExists = await Pessoa.findOne({
      where: { cpf: req.body.cpf }
    });

    //Se o cpf já existe no banco retorna a requisição com o erro
    if (cpfExists) {
      return res.status(400).json({ error: "CPF already exists." });
    }

    //Procura se o email da requisição ja existe no banco
    const emailExists = await Pessoa.findOne({
      where: { email: req.body.email }
    });

    //Se o email já existe no banco retorna a requisição com o erro
    if (emailExists) {
      return res.status(400).json({ error: "Email already exists." });
    }

    //Insere o registro com o dados da requsição se passar pelas validações anteriores
    const people = await Pessoa.create(req.body);

    //retorna os dados registrados e mensagem de sucesso
    return res.json({ people, message: "People successfully inserted" });
  }
};

//Importa model de pessoas
const { Pessoa } = require("../models");

module.exports = {
  /* Listar todos os registros da tabela pessoa */
  async allPeoples(req, res) {
    const people = await Pessoa.findAll();

    return res.json(people);
  },

  /* Listar todos os registros de um ID da tabela pessoa */
  async findOnePeople(req, res) {
    //aramzena o id recebido na requisição em uma constante
    const { id } = req.params;

    //Procura se ID da requisição existe no banco
    const idExists = await Pessoa.findOne({
      where: { id }
    });

    //Se o ID nao existe no banco retorna a requisição com o erro
    if (!idExists) {
      return res.status(400).json({ error: "ID not found" });
    }

    //Busca no banco os registro do ID recebido na requisição
    const people = await Pessoa.findOne({ where: { id } });

    //Retorna a requisição com os dados do ID recebido
    return res.json(people);
  },

  /* Criar registro na tabela pessoa */
  async createPeople(req, res) {
    const { cpf } = req.body;
    const { nome } = req.body;
    const { email } = req.body;
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
      where: { cpf }
    });

    //Se o cpf já existe no banco retorna a requisição com o erro
    if (cpfExists) {
      return res.status(400).json({ error: "CPF already exists." });
    }

    //Procura se o email da requisição ja existe no banco
    const emailExists = await Pessoa.findOne({
      where: { email }
    });

    //Se o email já existe no banco retorna a requisição com o erro
    if (emailExists) {
      return res.status(400).json({ error: "Email already exists." });
    }

    //Insere o registro com o dados da requsição se passar pelas validações anteriores
    const people = await Pessoa.create(req.body);

    //retorna os dados registrados e mensagem de sucesso
    return res.json({ people, message: "People successfully inserted" });
  },

  /* Alterar pessoa pelo ID */
  async updatePeople(req, res) {
    const { id } = req.params;
    const { cpf } = req.body;
    const { nome } = req.body;
    const { idade } = req.body;
    const { sexo } = req.body;
    const { telefone } = req.body;
    const { email } = req.body;
    const { ativo } = req.body;

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

    //O registro com o dados da requsição filtradndo pelo ID recebido na requisição, se passar pelas validações anteriores
    const peopleUpadated = await Pessoa.update(
      { nome, cpf, nome, idade, sexo, telefone, email, ativo },
      {
        where: { id }
      }
    );

    //retorna o ID que teve os registros alterados e mensagem de sucesso
    return res.json({ id: id, message: "People updated" });
  }
};

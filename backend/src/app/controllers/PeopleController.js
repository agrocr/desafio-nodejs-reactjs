const { People } = require("../models");

class PeopleController {
  async store(req, res) {
    const person = await People.create(req.body);
    return res.status(201).json(person);
  }

  async show(req, res) {
    const { id } = req.params;

    let person = await People.findOne({ where: { id } });
    if (person !== null) {
      return res.status(200).json(person);
    } else {
      return res.status(404).json({
        message: "Something went wrong, maybe you type an invalid id."
      });
    }
  }

  async index(req, res) {
    const people = await People.findAll();
    return res.json(people);
  }

  async update(req, res) {
    const { id } = req.params;
    const { name, gender, age } = req.body;
    const result = await People.update(
      { name, gender, age },
      { where: { id } }
    );
    if (result == 1) {
      return res.status(200).json({ message: "People updated" });
    } else {
      return res.status(404).json({
        message: "Something went wrong, maybe you type an invalid id."
      });
    }
  }

  async destroy(req, res) {
    const { id } = req.params;
    let result = await People.destroy({ where: { id } });
    if (result == 1) {
      return res.status(200).json({ message: "Person Deleted" });
    } else {
      return res.status(404).json({
        message: "Something went wrong, maybe you type an invalid id."
      });
    }
  }
}

module.exports = new PeopleController();

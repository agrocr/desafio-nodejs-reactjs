import Person from '../model/Person'

class PersonController {
  async index (req, res) {
    const people = await Person.findAll()

    return res.json(people)
  }

  async store (req, res) {
    const { name } = req.body

    if (!name) {
      return res.status(400).json({ error: 'Name is not provided.' })
    }

    const newPerson = await Person.create({ name })

    return res.json(newPerson)
  }

  async delete (req, res) {
    const { id } = req.params

    if (!id) {
      return res.status(400).json({ error: 'ID is not provided.' })
    }

    const personExists = await Person.findOne({
      where: {
        id
      }
    })

    if (!personExists) {
      return res.status(400).json({ error: 'Invalid ID.' })
    }

    await Person.destroy({
      where: {
        id
      }
    })

    return res.json({ response: `${personExists.name} deleted.` })
  }

  async update (req, res) {
    const { id } = req.params
    const { name } = req.body

    if (!id) {
      return res.status(400).json({ error: 'ID is not provided.' })
    }

    if (!name) {
      return res.status(400).json({ error: 'Name is not provided.' })
    }

    const personExists = await Person.findOne({
      where: {
        id
      }
    })

    if (!personExists) {
      return res.status(400).json({ error: 'Invalid ID.' })
    }

    await Person.update({ name }, {
      where: { id }
    })

    return res.json({ response: `${personExists.name} edited.` })
  }
}

export default new PersonController()

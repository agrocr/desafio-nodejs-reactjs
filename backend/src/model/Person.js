import { Model, Sequelize } from 'sequelize'

class Person extends Model {
  static init (sequelize) {
    super.init({
      name: Sequelize.STRING
    }, {
      sequelize
    })

    return this
  }
}

export default Person

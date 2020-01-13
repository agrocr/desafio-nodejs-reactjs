import Sequelize from 'sequelize'
import Person from '../model/Person'
import databaseConfig from '../config/database'

const models = [Person]

class Database {
  constructor () {
    this.init()
  }

  init () {
    this.connection = new Sequelize(databaseConfig)

    models.map(model => model.init(this.connection))

    this.connection.authenticate().then(() => console.log('Database connected.'))
    this.connection.sync()
  }
}

export default new Database()

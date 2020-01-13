require('dotenv/config')

module.exports = {
  dialect: 'postgres',
  logging: false,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
}

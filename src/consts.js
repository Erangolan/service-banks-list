require('dotenv').config()

const packagejson = require('../package.json')

const {
  DB_HOST,
  DB_USER,
  DB_PASS,
  PORT,
  API_KEY,
  API_URL,
} = process.env

module.exports = {
  DB_HOST,
  DB_USER,
  DB_PASS,
  PORT,
  API_KEY,
  API_URL,
  SERVICE_NAME: `${packagejson.name}:${packagejson.version}`,
}

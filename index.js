require('./src/db')
const express = require('express')
const initDB = require('./src/funcs/initDB')

const app = express()

app.use(express.json())

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, Content-Type')
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'POST')
    return res.status(200).json({})
  }
  return next()
})

const bootstrap = async () => {
  await initDB()
}

bootstrap()

app.use('/api', require('./src/api'))

app.listen(3000, () => console.log('server listening on port 3000'))

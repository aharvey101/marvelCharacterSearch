const express = require('express')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const cors = require('cors')
const app = express()

const results = require('./utils/mockResults')
app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

app.get('/', (req, res) => {
  // Normally with a database attached, you would search the the database and return what you want,
  // In this case we will just regex the results array
  const hero = req.query.nameStartsWith
  const regex = new RegExp(`^${hero}`)
  const regexedResults = results.data.results.filter((result) =>
    result.name.match(regex)
  )
  results.data.results === regexedResults

  res.send(results)
})

module.exports = app

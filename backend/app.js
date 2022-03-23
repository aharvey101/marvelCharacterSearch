const createError = require('http-errors')
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const app = express()

const results = require('./utils/mockResults')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.get('/heroes', (req, res) => {
  // Normally with a database attached, you would search the the database and return what you want,
  // In this case we will just regex the results array
  const hero = req.body.nameStartsWith
  const regex = new RegExp(`^${hero}`)
  const regexedResults = results.data.results.filter((result) =>
    result.name.match(regex)
  )
  console.log('Filtred Results', regexedResults)
  res.send(regexedResults)
})

module.exports = app

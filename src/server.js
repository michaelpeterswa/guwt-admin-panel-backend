//https://medium.com/swlh/how-to-create-your-first-mern-mongodb-express-js-react-js-and-node-js-stack-7e8b20463e66

const express = require('express')
const bodyParser = require('body-parser')
var cors = require('cors')
var path = require('path')

require('dotenv').config()

const db = require('./db')
const organizationRouter = require('./routes/organization-router')

const app = express()
//port the app is currently serving to
const port = 6969

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/', (req, res) => {
    res.send('guwt-admin-panel-backend')
})

app.use('/api', organizationRouter)

const server = app.listen(port, () => console.log(`guwt-admin-panel-backend server app listening on port ${port}!\n`))

app.use(function (req, res) {
    res.status(404).send("404");
  })

module.exports = server
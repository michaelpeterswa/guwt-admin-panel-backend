//https://medium.com/swlh/how-to-create-your-first-mern-mongodb-express-js-react-js-and-node-js-stack-7e8b20463e66

const express = require('express')
const bodyParser = require('body-parser')
const passport = require('passport')
const HeaderAPIKeyStrategy = require('passport-headerapikey').HeaderAPIKeyStrategy
var cors = require('cors')
var path = require('path')

require('dotenv').config()

const db = require('./db')
const organizationRouter = require('./routes/organization-router')
const apikeyRouter = require('./routes/apikey-router')
const Apikey = require('./models/apikey-model')

const app = express()
//port the app is currently serving to
const port = 6969

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));


db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/', (req, res) => {
    res.send('guwt-admin-panel-backend')
})

passport.initialize()
passport.use(new HeaderAPIKeyStrategy(
  { header: 'Authentication', prefix: 'Api-Key ' },
  false,
  function(apikey, done) {
      console.log(apikey);
      Apikey.findOne({ key: apikey }, function (err, apikey) {
      if (err) { return done(err); }
      if (!apikey) { return done(null, false); }
      // tempfix
      return done(null, apikey);
      });
  }
  ));

app.use('/api', organizationRouter)
app.use('/auth', apikeyRouter)

const server = app.listen(port, () => console.log(`guwt-admin-panel-backend server app listening on port ${port}!\n`))

app.get('/unauthorized', (req, res) => {
  res.status(401).json({ message: "Unauthorized" });
  })

app.use(function (req, res) {
    res.status(404).send("404");
  })

module.exports = server
//https://medium.com/swlh/how-to-create-your-first-mern-mongodb-express-js-react-js-and-node-js-stack-7e8b20463e66

const express = require('express')
const bodyParser = require('body-parser')
const HeaderAPIKeyStrategy = require('passport-headerapikey').HeaderAPIKeyStrategy
var passport = require('passport')
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
app.use(passport.initialize());


db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/', (req, res) => {
    res.send('guwt-admin-panel-backend')
})

//-----------------------------------
// TESTING
console.log(process.env.API_KEY)

passport.use(new HeaderAPIKeyStrategy(
  { header: 'Authentication', prefix: 'Api-Key ' },
  false,
  function(apikey, done) {
    Apikey.findOne({ key: apikey }, function (err, user) {
      if (err) { return done(err); }
      if (!user) { return done(null, false); }
      return done(null, user);
    });
  }
));

app.post('/test', 
  passport.authenticate('headerapikey', { session: false, failureRedirect: '/unauthorized' }),
  function(req, res) {
    res.json({ message: "Authenticated" })
  });

app.get('/unauthorized', (req, res) => {
  res.send('unauthorized')
})

//-----------------------------------

app.use('/api', organizationRouter)
app.use('/auth', apikeyRouter)

const server = app.listen(port, () => console.log(`guwt-admin-panel-backend server app listening on port ${port}!\n`))

app.use(function (req, res) {
    res.status(404).send("404");
  })

module.exports = server
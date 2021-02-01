// Michael Peters
// michaelpeterswa
// Last Modified: 2/1/2020 11:45 PST 

const mongoose = require('mongoose')

mongoose
    .connect(process.env.DB_HOST, { useNewUrlParser: true, useUnifiedTopology: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db
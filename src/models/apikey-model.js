// Michael Peters
// michaelpeterswa
// Last Modified: 2/1/2020 11:45 PST 

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Apikey = new Schema(
    {
        name: { type: String, required: true },
        key: { type: String, required: true },
        enabled: { type: Boolean, required: true },
    },
    { timestamps: true },
)

module.exports = mongoose.model('apikey', Apikey)
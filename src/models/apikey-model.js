const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Apikey = new Schema(
    {
        name: { type: String, required: true },
        key: { type: String, required: false },
        enabled: { type: Boolean, required: true },
    },
    { timestamps: true },
)

module.exports = mongoose.model('apikey', Apikey)
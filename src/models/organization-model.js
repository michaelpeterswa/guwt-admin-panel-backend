// Michael Peters
// michaelpeterswa
// Last Modified: 2/1/2020 11:45 PST 

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Organization = new Schema(
    {
        name: { type: String, required: true },
        department: { type: String, required: true },
        admin: { type: String, required: true },
        moderators: [{ type: String, required: false}]
    },
    { timestamps: true },
)

module.exports = mongoose.model('organizations', Organization)
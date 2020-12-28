const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Organization = new Schema(
    {
        name: { type: String, required: true },
        department: { type: String, required: true },
        admin: { 
            type: Array,
            items:{type: String}, 
            required: true 
        },
    },
    { timestamps: true },
)

module.exports = mongoose.model('organizations', Organization)
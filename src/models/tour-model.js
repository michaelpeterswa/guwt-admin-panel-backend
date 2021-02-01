// Michael Peters
// michaelpeterswa
// Last Modified: 2/1/2020 11:45 PST 

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Tour = new Schema(
    {
        name: { type: String, required: true },
        description: { type: String, required: true },
        organization: { type: String, required: true},
        stops: [{ 
            stop_id: String, 
            stop_name: String,
            stop_desc: String,
            lat: String,
            long: String,
            media: [{text: String}]
        }]
    },
    { timestamps: true },
)

module.exports = mongoose.model('tours', Tour)
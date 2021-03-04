// Michael Peters
// michaelpeterswa
// Last Modified: 2/10/2020 16:45 PST 

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Tour = new Schema(
    {
        name: { type: String, required: true },
        description: { type: String, required: true },
        organization: { type: String, required: true},
        number_of_stops: { type: Number, required: true},
        enabled: { type: Boolean, required: true},
        stops: [{ 
            stop_id: String, 
            stop_number: Number,
            stop_name: String,
            stop_desc: String,
            lat: String,
            long: String,
            media: [{
                id: String,
                s3_loc: String}]
        }]
    },
    { timestamps: true },
)

module.exports = mongoose.model('tours', Tour)

// Michael Peters
// michaelpeterswa
// Last Modified: 3/17/2020 14:45 PDT 

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Media = new Schema(
    {
        tour_id: { type: String, required: true },
        stop_id: { type: String, required: true },
        s3_id: { type: String, required: false },
        s3_loc: { type: String, required: false},
        mime_type: { type: String, required: false},
        text: { type: String, required: false}

        // may eventually need these for the AR component of our project
        // ar: {type: Boolean, required: true},
        // heading: {type: Number, required: true},
    },
    { timestamps: true },
)

module.exports = mongoose.model('media', Media)
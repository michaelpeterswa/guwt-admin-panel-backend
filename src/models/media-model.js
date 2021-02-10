// Michael Peters
// michaelpeterswa
// Last Modified: 2/9/2020 10:45 PST 

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
    },
    { timestamps: true },
)

module.exports = mongoose.model('media', Media)
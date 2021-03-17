// Michael Peters
// michaelpeterswa
// Last Modified: 3/17/2020 11:45 PDT 

const S3 = require('aws-sdk/clients/s3')
const { v4: uuidv4 } = require('uuid');

const Media = require('../models/media-model')

const s3 = new S3({region: "us-west-2"})

createMedia = (req, res) => {
    const body = req.body
    const files = req.files
    const media_obj = new Media()

    if (!files && !req.body.add_text) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a file or text',
        })
    } else {
        media_obj.tour_id = req.body.tour_id
        media_obj.stop_id = req.body.stop_id

        if(req.body.add_text){
            media_obj.text = req.body.add_text
            media_obj.save()
                    .then(() => {
                        return res.status(201).json({
                            success: true,
                            id: media_obj._id,
                            message: 'Media created!',
                        })
                    })
                    .catch(error => {
                        return res.status(400).json({
                            error,
                            message: 'Media not created!',
                        })
                    })

        } else {
            let media = req.files.media
            media_obj.s3_id = uuidv4();
            media_obj.mime_type = media.mimetype

            let file_key = ""
            if (media.mimetype == "image/jpeg")
                file_key = `${media_obj.s3_id}.jpg`
            else if (media.mimetype == "image/png")
                file_key = `${media_obj.s3_id}.png`
            else if (media.mimetype == "audio/mpeg")
                file_key = `${media_obj.s3_id}.mp3`
            else if (media.mimetype == "video/mp4")
                file_key = `${media_obj.s3_id}.mp4`
            else if (media.mimetype == "text/plain")
                file_key = `${media_obj.s3_id}.txt`

            // Setting up S3 upload parameters
            const params = {
                Bucket: process.env.BUCKET_NAME,
                Key: file_key, // File name you want to save as in S3
                ContentType: media.mimetype,
                Body: media.data
            };

            // call S3 to retrieve upload file to specified bucket
            s3.upload (params, function (err, data) {
                if (err) {
                    console.log("Error", err);
                    
                } if (data) {
                    media_obj.s3_loc = "https://guwt-media.s3-us-west-2.amazonaws.com/" + data
                    media_obj.save()
                    .then(() => {
                        return res.status(201).json({
                            success: true,
                            id: media_obj._id,
                            message: 'Media created!',
                        })
                    })
                    .catch(error => {
                        return res.status(400).json({
                            error,
                            message: 'Media not created!',
                        })
                    })
                } else {
                    return res.status(400).json({
                        error,
                        message: 'Media not created!',
                    });
                }
            });
        }
    }
}

deleteMedia = async (req, res) => {
    await Media.findOneAndDelete({ _id: req.params.id }).then(media => {
        if(media){
            if(!media.text){
                let file_key = ""
                if (media.mime_type == "image/jpeg")
                    file_key = `${media.s3_id}.jpg`
                else if (media.mime_type == "image/png")
                    file_key = `${media.s3_id}.png`
                else if (media.mime_type == "audio/mpeg")
                    file_key = `${media.s3_id}.mp3`
                else if (media.mime_type == "video/mp4")
                    file_key = `${media.s3_id}.mp4`
                else if (media.mime_type == "text/plain")
                    file_key = `${media.s3_id}.txt`

                // Setting up S3 upload parameters
                const params = {
                    Bucket: process.env.BUCKET_NAME,
                    Key: file_key, // File name you want to save as in S3
                };
                s3.deleteObject(params, function(err, data) {
                    if (err) console.log(err, err.stack); // an error occurred
                });}

            return res.status(200).json({ success: true, data: media })
         } else
            return res.status(404).json({ success: false, error: "not found" })
    }).catch(error => {
        return res
                .status(404).json({ success: false, error: error })
    })
}

getMediaById = async (req, res) => {
    await Media.findOne({ _id: req.params.id }).then(media => {
        if (!media) {
            return res
                .status(404)
                .json({ success: false, error: `Media not found` })
        }
        else {
            return res.status(200).json({ success: true, data: media })
        }
    }).catch(err => {
        return res
        .status(404)
        .json({ success: false, error: err })})
}

getMedia = async (req, res) => {
    await Media.find({}).then(medias => {
        if (!medias.length) {
            return res
                .status(404)
                .json({ success: false, error: `Media not found` })
        }
        else{
            return res.status(200).json({ success: true, data: medias })
        }
    }).catch(err => {
        return res
        .status(404)
        .json({ success: false, error: err })})
}

module.exports = {
    createMedia,
    deleteMedia,
    getMediaById,
    getMedia,
}
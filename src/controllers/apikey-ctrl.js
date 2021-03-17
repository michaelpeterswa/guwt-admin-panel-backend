// Michael Peters
// michaelpeterswa
// Last Modified: 3/17/2020 11:45 PDT 

const Apikey = require('../models/apikey-model')
const { v4: uuidv4 } = require('uuid');

createApikey = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide an apikey',
        })
    }

    const apikey = new Apikey(body)
    apikey.key = uuidv4();

    if (!apikey) {
        return res.status(400).json({ success: false, error: err })
    }

    apikey
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: apikey._id,
                message: 'Apikey created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Apikey not created!',
            })
        })
}

updateApikey = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Apikey.findOne({ _id: req.params.id }).then(apikey => {
        if(apikey){
            apikey.name = body.name
            apikey.key = body.key
            apikey.enabled = body.enabled
            apikey
                .save()
                .then(() => {
                    return res.status(200).json({
                        success: true,
                        id: apikey._id,
                        message: 'Apikey updated!',
                    })
                })
                .catch(error => {
                    return res.status(404).json({
                        error,
                        message: 'Apikey not updated!',
                    })
                })}})
        .catch(error => {
            return res.status(404).json({success: false, message: 'Apikey not updated!', error: error})
        })
    }

deleteApikey = async (req, res) => {
    await Apikey.findOneAndDelete({ _id: req.params.id }).then(apikey => {
        if(apikey){
            return res.status(200).json({ success: true, data: apikey })
        }
        else {
            return res
                .status(404)
                .json({ success: false, error: `Apikey not found` })
        }    
    }).catch(err => {
        return res
        .status(404)
        .json({ success: false, error: error })})
}

getApikeyById = async (req, res) => {
    await Apikey.findOne({ _id: req.params.id }).then(apikey => {
        if(apikey){
            return res.status(200).json({ success: true, data: apikey })
        }
        else {
            return res
                .status(404)
                .json({ success: false, error: `Apikey not found` })
        }
    }).catch(err => {
        return res
        .status(404)
        .json({ success: false, error: error })})
}

getApikeys = async (req, res) => {
    await Apikey.find({}).then(apikeys => {
        if(apikeys.length) {
            return res.status(200).json({ success: true, data: apikeys })
        }
        else {
            return res
                .status(404)
                .json({ success: false, error: `No Apikeys found` })
        }
    }).catch(err => {
        return res
        .status(404)
        .json({ success: false, error: error })})
}

module.exports = {
    createApikey,
    updateApikey,
    deleteApikey,
    getApikeys,
    getApikeyById,
}
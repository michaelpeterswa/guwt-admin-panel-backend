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

    Apikey.findOne({ _id: req.params.id }, (err, apikey) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Apikey not found!',
            })
        }
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
            })
    })
}

deleteApikey = async (req, res) => {
    await Apikey.findOneAndDelete({ _id: req.params.id }, (err, apikey) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!apikey) {
            return res
                .status(404)
                .json({ success: false, error: `Apikey not found` })
        }

        return res.status(200).json({ success: true, data: apikey })
    }).catch(err => console.log(err))
}

getApikeyById = async (req, res) => {
    await Apikey.findOne({ _id: req.params.id }, (err, apikey) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!apikey) {
            return res
                .status(404)
                .json({ success: false, error: `Apikey not found` })
        }
        return res.status(200).json({ success: true, data: apikey })
    }).catch(err => console.log(err))
}

getApikeys = async (req, res) => {
    await Apikey.find({}, (err, apikeys) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!apikeys.length) {
            return res
                .status(404)
                .json({ success: false, error: `Apikey not found` })
        }
        return res.status(200).json({ success: true, data: apikeys })
    }).catch(err => console.log(err))
}

module.exports = {
    createApikey,
    updateApikey,
    deleteApikey,
    getApikeys,
    getApikeyById,
}
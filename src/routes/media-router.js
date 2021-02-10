// Michael Peters
// michaelpeterswa
// Last Modified: 2/1/2020 11:45 PST 

const express = require('express')
const mediaCtrl = require('../controllers/media-ctrl')
const router = express.Router()

router.post('/m', mediaCtrl.createMedia)
// router.put('/m/:id', MediaCtrl.updateMedia)
// router.delete('/m/:id', MediaCtrl.deleteMedia)
// router.get('/m/:id', MediaCtrl.getMediaById)
// router.get('/ms', mediaCtrl.getMedia)

module.exports = router
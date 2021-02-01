// Michael Peters
// michaelpeterswa
// Last Modified: 2/1/2020 11:45 PST 

const express = require('express')
const APICtrl = require('../controllers/apikey-ctrl')
const router = express.Router()

router.post('/a', APICtrl.createApikey)
router.put('/a/:id', APICtrl.updateApikey)
router.delete('/a/:id', APICtrl.deleteApikey)
router.get('/a/:id', APICtrl.getApikeyById)
router.get('/as', APICtrl.getApikeys)

module.exports = router
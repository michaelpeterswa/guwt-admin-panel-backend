const express = require('express')

const OrgCtrl = require('../controllers/organization-ctrl')

const router = express.Router()

router.post('/organization', OrgCtrl.createOrganization)
router.put('/organization/:id', OrgCtrl.updateOrganization)
router.delete('/organization/:id', OrgCtrl.deleteOrganization)
router.get('/organization/:id', OrgCtrl.getOrganizationById)
router.get('/organizations', OrgCtrl.getOrganizations)

module.exports = router
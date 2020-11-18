const express = require('express')
const OrgCtrl = require('../controllers/organization-ctrl')
const router = express.Router()
const passport = require('passport')

router.post('/organization', 
    passport.authenticate('headerapikey', { session: false, failureRedirect: '/unauthorized' }), 
    OrgCtrl.createOrganization)

router.put('/organization/:id', 
    passport.authenticate('headerapikey', { session: false, failureRedirect: '/unauthorized' }),
    OrgCtrl.updateOrganization)

router.delete('/organization/:id', 
    passport.authenticate('headerapikey', { session: false, failureRedirect: '/unauthorized' }),
    OrgCtrl.deleteOrganization)

router.get('/organization/:id', 
    passport.authenticate('headerapikey', { session: false, failureRedirect: '/unauthorized' }),
    OrgCtrl.getOrganizationById)

router.get('/organizations',
    passport.authenticate('headerapikey', { session: false, failureRedirect: '/unauthorized' }),
    OrgCtrl.getOrganizations)

module.exports = router
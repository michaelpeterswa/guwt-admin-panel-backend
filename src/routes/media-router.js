// Michael Peters
// michaelpeterswa
// Last Modified: 2/1/2020 11:45 PST 

const express = require('express')
const mediaCtrl = require('../controllers/media-ctrl')
const router = express.Router()
const passport = require('passport')

router.post('/', 
    passport.authenticate('headerapikey', { session: false, failureRedirect: '/unauthorized' }), 
    mediaCtrl.createMedia)

// router.put('/m/:id', 
//     passport.authenticate('headerapikey', { session: false, failureRedirect: '/unauthorized' }),
//     mediaCtrl.updateMedia)

router.delete('/m/:id', 
    passport.authenticate('headerapikey', { session: false, failureRedirect: '/unauthorized' }),
    mediaCtrl.deleteMedia)

router.get('/m/:id', 
    passport.authenticate('headerapikey', { session: false, failureRedirect: '/unauthorized' }),
    mediaCtrl.getMediaById)

router.get('/ms',
    passport.authenticate('headerapikey', { session: false, failureRedirect: '/unauthorized' }),
    mediaCtrl.getMedia)

module.exports = router
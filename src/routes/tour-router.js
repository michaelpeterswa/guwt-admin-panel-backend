const express = require('express')
const TourCtrl = require('../controllers/tour-ctrl')
const router = express.Router()
const passport = require('passport')

router.post('/', 
    passport.authenticate('headerapikey', { session: false, failureRedirect: '/unauthorized' }), 
    TourCtrl.createTour)

router.put('/t/:id', 
    passport.authenticate('headerapikey', { session: false, failureRedirect: '/unauthorized' }),
    TourCtrl.updateTour)

router.delete('/t/:id', 
    passport.authenticate('headerapikey', { session: false, failureRedirect: '/unauthorized' }),
    TourCtrl.deleteTour)

router.get('/t/:id', 
    passport.authenticate('headerapikey', { session: false, failureRedirect: '/unauthorized' }),
    TourCtrl.getTourById)

router.get('/tours',
    passport.authenticate('headerapikey', { session: false, failureRedirect: '/unauthorized' }),
    TourCtrl.getTours)

module.exports = router
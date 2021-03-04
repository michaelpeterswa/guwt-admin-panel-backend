// Michael Peters
// michaelpeterswa
// Last Modified: 2/10/2020 11:45 PST 

const Tour = require('../models/tour-model')

createTour = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a tour',
        })
    }

    const tour = new Tour(body)

    if (!tour) {
        return res.status(400).json({ success: false, error: err })
    }

    tour
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: tour._id,
                message: 'Tour created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Tour not created!',
            })
        })
}

updateTour = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Tour.findOne({ _id: req.params.id }, (err, tour) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Tour not found!',
            })
        }
        tour.name = body.name
        tour.description = body.description
        tour.organization = body.organization
        tour.stops = body.stops
        tour.enabled = body.enabled
        tour
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: tour._id,
                    message: 'Tour updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Tour not updated!',
                })
            })
    })
}

deleteTour = async (req, res) => {
    await Tour.findOneAndDelete({ _id: req.params.id }, (err, tour) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!tour) {
            return res
                .status(404)
                .json({ success: false, error: `Tour not found` })
        }

        return res.status(200).json({ success: true, data: tour })
    }).catch(err => console.log(err))
}

getTourById = async (req, res) => {
    await Tour.findOne({ _id: req.params.id }, (err, tour) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!tour) {
            return res
                .status(404)
                .json({ success: false, error: `Tour not found` })
        }
        return res.status(200).json({ success: true, data: tour })
    }).catch(err => console.log(err))
}

getTours = async (req, res) => {
    await Tour.find({}, (err, tours) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!tours.length) {
            return res
                .status(404)
                .json({ success: false, error: `Tour not found` })
        }
        return res.status(200).json({ success: true, data: tours })
    }).catch(err => console.log(err))
}

module.exports = {
    createTour,
    updateTour,
    deleteTour,
    getTours,
    getTourById,
}

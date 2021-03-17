// Michael Peters
// michaelpeterswa
// Last Modified: 3/17/2020 11:45 PDT 

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

    Tour.findOne({ _id: req.params.id }).then(tour => {
        if(tour){
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
                })}
        else {
            return res.status(404).json({
                error,
                message: 'Tour not updated!',
            }) 
        }
    }).catch(error => {
        return res
        .status(404)
        .json({ success: false, message: 'Tour not updated!', error: error })})
}

deleteTour = async (req, res) => {
    await Tour.findOneAndDelete({ _id: req.params.id }).then(tour => {
        if (tour) {
            return res.status(200).json({ success: true, data: tour })
        }
        else {
            return res.status(404).json({ success: false, error: "Tour not Found" })
        }       
    }).catch(error => {
        return res
        .status(404)
        .json({ success: false, error: error })})
}

getTourById = async (req, res) => {
    await Tour.findOne({ _id: req.params.id }).then(tour => {
        if (tour) {
            return res.status(200).json({ success: true, data: tour })
        }
        else {
            return res.status(404).json({ success: false, error: "Tour not Found" })
        }   
    }).catch(err => {
        return res
        .status(404)
        .json({ success: false, error: err })})
}

getTours = async (req, res) => {
    await Tour.find({}).then(tours => {
        if (tours) {
            return res.status(200).json({ success: true, data: tours })
        }
        else {
            return res.status(404).json({ success: false, error: "Tour not Found" })
        }   
    }).catch(err => {
        return res
        .status(404)
        .json({ success: false, error: err })})
}

module.exports = {
    createTour,
    updateTour,
    deleteTour,
    getTours,
    getTourById,
}

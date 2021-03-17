// Michael Peters
// michaelpeterswa
// Last Modified: 2/17/2020 11:45 PST 

const Organization = require('../models/organization-model')

createOrganization = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide an organization',
        })
    }

    const organization = new Organization(body)

    if (!organization) {
        return res.status(400).json({ success: false, error: err })
    }

    organization
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: organization._id,
                message: 'Organization created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Organization not created!',
            })
        })
}

updateOrganization = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Organization.findOne({ _id: req.params.id }).then(organization => {
        if (!organization) {
            return res.status(404).json({
                err,
                message: 'Organization not found!',
            })
        }
        organization.name = body.name
        organization.department = body.department
        organization.admin = body.admin
        organization.moderators = body.moderators
        organization.prospectives = body.prospectives
        organization
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: organization._id,
                    message: 'Organization updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Organization not updated!',
                })
            })
    }).catch(error => {
        return res
        .status(404)
        .json({ success: false, error: error })})
}

deleteOrganization = async (req, res) => {
    await Organization.findOneAndDelete({ _id: req.params.id }).then(r => {
        if(r)
            return res.status(200).json({ success: true, data: r })
        else
            return res.status(404).json({ success: false, error: "not found" })
    }).catch(error => {
        return res
                .status(404).json({ success: false, error: error })
    })
}

getOrganizationById = async (req, res) => {
    await Organization.findOne({ _id: req.params.id }).then(organization => {
        if (!organization) {
            return res
                .status(404)
                .json({ success: false, error: `Organization not found` })
        }
        else {
            return res.status(200).json({ success: true, data: organization })
        }
    }).catch(err => {
        return res
        .status(404)
        .json({ success: false, error: err })})
}

getOrganizations = async (req, res) => {
    await Organization.find({}).then(organizations => {
        if (!organizations.length) {
            return res
                .status(404)
                .json({ success: false, error: `Organizations not found` })
        }
        else {
            return res.status(200).json({ success: true, data: organizations })
        }
    }).catch(err => {
        return res
        .status(404)
        .json({ success: false, error: err })})
}

module.exports = {
    createOrganization,
    updateOrganization,
    deleteOrganization,
    getOrganizations,
    getOrganizationById,
}
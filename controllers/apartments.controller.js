const apartmentService = require('../services/apartments.service');

exports.getApartments = async (req, res) => {
    try {
        const query = req.query || {};
        const apartments = await apartmentService.find(query);
        res.status(200).json({
            status: 200,
            data: apartments,
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            status: 500,
            error: err.message,
        });
    }
};

exports.getApartment = async (req, res) => {
    try {
        const apartment = await apartmentService.findById(req.params.id);
        if (!apartment) {
            return res.status(404).json({
                status: 404,
                message: 'Apartment not found.',
            });
        }
        res.status(200).json({
            status: 200,
            data: apartment,
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            status: 500,
            error: err.message,
        });
    }
};

exports.createApartment = async (req, res) => {
    try {
        const newApartment = await apartmentService.create(req.body);
        res.status(201).json({
            status: 201,
            data: newApartment,
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            status: 500,
            error: err.message,
        });
    }
};

exports.updateApartment = async (req, res) => {
    try {
        const updatedApartment = await apartmentService.update(req.params.id, req.body);
        if (!updatedApartment) {
            return res.status(404).json({
                status: 404,
                message: 'Apartment not found.',
            });
        }
        res.status(200).json({
            status: 200,
            data: updatedApartment,
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            status: 500,
            error: err.message,
        });
    }
};

exports.deleteApartment = async (req, res) => {
    try {
        const deleted = await apartmentService.delete(req.params.id);
        if (!deleted) {
            return res.status(404).json({
                status: 404,
                message: 'Apartment not found.',
            });
        }
        res.status(204).send();
    } catch (err) {
        console.error(err);
        res.status(500).json({
            status: 500,
            error: err.message,
        });
    }
};

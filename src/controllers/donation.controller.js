const Donation = require('../models/donaciones.models');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const createAccessToken = require("../services/generar-jwt");

const createDonation = async (req, res) => {
    const {donation, unidadPago} = req.body;
    try {
        const newDonation = new Donation({
            donation,
            unidadPago,
            user : req.user.id,
            donationFor : req.user.username
        });

        const donationSaved = await newDonation.save();
        const token = await createAccessToken({id: donationSaved._id})

        res.cookie('token', token).json({
            id: donationSaved._id,
            user: donationSaved.user,
            donationFor: donationSaved.user.username,
            unidadPago: donationSaved.unidadPago,
            valueDonation: donationSaved.donation,
            createdAt: donationSaved.createdAt,
            updatedAt: donationSaved.updatedAt,
            message: "Donación hecha correctamente",
        });
    } catch (error) {
        console.log(error);
        res.status(500).send("Donación fallida");
    }
}



module.exports = {createDonation};

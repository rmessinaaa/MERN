const mongoose = require('mongoose');
const Image = require('../models/images.models');
const multer = require('multer');

const sendFile = async (req, res) => {
    const {image, campana, description} = req.body;
    
    const applyImage = new Image({
        image,
        campana, 
        description
    })

}

module.exports = {sendFile};


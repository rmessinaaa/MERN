const mongoose = require('mongoose');
const Image = require('../models/images.models');
const multer = require('multer');

const uploadImage = async (req, res) => {
    try {
        const image = new Image({
            campana: req.body.campana,
            description: req.body.description,
            filename: req.file.filename,
            path: '/img/uploads/' + req.file.filename,
            originalname: req.file.originalname,
            mimetype: req.file.mimetype,
            size: req.file.size
        });

        await image.save();
        res.status(201).json({ message: 'Imagen subida exitosamente', image });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al subir la imagen' });
    }
};

const getImage = async (req, res) => {
    const images = await Image.find();
}

const deleteImage = async (req, res) => {
    const deleteimage = await Image.findByIdAndDelete(req.params.id, req.body);
    if(!deleteImage) {
        return res.status(404).json({message: "No se ha encontrado la imagen"})}
    
    res.sendStatus(204);


}
module.exports = {uploadImage, getImage, deleteImage};



const mongoose = require('mongoose');
const Image = require('../models/images.models');
const fileUpload = require('express-fileupload');
const path = require('path')
const fs = require('fs')

const uploadImage = async (req, res) => {
    try {
        if (!req.files || Object.keys(req.files).length === 0) {
            res.status(400).send('Debes subir un archivo');
            return;
        }

        console.log('req.files >>>', req.files);
        const filePath = path.join(__dirname, '/upload');
        const {image} = req.files
        uploadPath = filePath + image.name;
        
     image.mv(uploadPath, function(err) {
         if (err) {
            //  res.status(500).send(err)
            console.log(err);
             return 
         }
    })
        console.log(image) 
        const { description, campana} = req.body;

        const newImage = new Image({
            description,
            filename: image.name,
            path: '/uploads/' + image.name,
            originalname: image.name,
            mimetype: image.mimetype,
            size: image.size,
            campana,
        });

        const saveImage = await newImage.save();
        const populatedImage = await Image.findById(saveImage._id).populate('campana');
        res.status(201).json({ message: 'Imagen subida exitosamente', populatedImage });
    } catch (error) {
        console.error(error);
    //     res.status(500).json({ message: 'Error al subir la imagen' });
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



const campana = require('../models/campanas.models');
const mongoose = require('mongoose')

const getAllCampanas = async (req, res) => {
    const obtenerCampanas = await campana.find();
    res.json(obtenerCampanas);
};

const getCampanas = async (req, res) => {
    const userId = req.user.id;
    console.log(userId);
    campana.find({ user: userId })
      .populate("user") // Si es necesario
      .then((campañas) => res.json(campañas))
      .catch((error) => res.status(500).json({ error: 'Error al obtener las campañas' }));
  };
  

const createCampana = async (req, res) => {
    const { title, description, date, meta, calculation, account, category, location } = req.body;
    console.log(req.user);

    try {const newCampana = new campana({
        title,
        description,
        meta,
        calculation,
        account,
        category,
        location,
        date,
        user: req.user.id
    });

    const savedCampana = await newCampana.save();

    if(savedCampana === null){
        console.log("problema al crear la campaña");
        return
    }
    const newImage = new Image({
        description,
        filename: image.name,
        path: '/uploads/' + image.name,
        originalname: image.name,
        mimetype: image.mimetype,
        size: image.size,
        campana: savedCampana._id
    });

    const saveImage = await newImage.save();

    const populatedCampana = await campana.findById(savedCampana._id).populate('user').populate('image');
    

    res.json(populatedCampana);}
    catch (error){
        console.log(error)
    }
};


const getCampana = async (req, res) => {
    const obtenerCampana = await campana.findById(req.params.id);
    if(!obtenerCampana) {
        return res.status(404).json({message: "No se ha encontrado la campana"})}
    res.json(obtenerCampana);
    
}

const updateCampana = async (req, res) => {
    const actualizarCampana = await campana.findByIdAndUpdate(req.params.id, req.body, {new: true});
    if(!actualizarCampana) {
        return res.status(404).json({message: "No se ha encontrado la campana"})}
    res.json(actualizarCampana);
};

const deleteCampana = async (req, res) => {
    const borrarCampana = await campana.findByIdAndDelete(req.params.id);
    if(!borrarCampana) {
        return res.status(404).json({message: "No se ha encontrado la campana"})}
    
    res.sendStatus(204);
}

module.exports = {getCampanas,getAllCampanas, getCampana, createCampana, updateCampana, deleteCampana}
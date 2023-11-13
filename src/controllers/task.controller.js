const campana = require('../models/campanas.models');

const getAllCampanas = async (req, res) => {
    const obtenerCampanas = await campana.find();
    res.json(obtenerCampanas);
};

const getCampanas = async (req, res) => {
    const obtenerCampanas = await campana.find({
        user: req.user.id
    }).populate("user");
    res.json(obtenerCampanas);
};

const createCampana = async (req, res) => {
    const {title, description, date} = req.body;
    console.log(req.user);
    const newCampana = new campana({
        title, 
        description, 
        date,
        user: req.user.id
    });
    const savedCampana = await newCampana.save();
    res.json(savedCampana);
    
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
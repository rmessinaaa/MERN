const User = require('../models/user.models');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const createAccessToken = require("../services/generar-jwt");





const register = async (req, res) => {
    const { username, email, password, rol } = req.body;
    try {
        const passwordHash = await bcrypt.hash(password, 10);
        const newUser = new User({
            username,
            email,
            password: passwordHash, 
            rol, 
        });

        const userSaved = await newUser.save();
        const token = await createAccessToken({id: userSaved._id})

        res.cookie('token', token).json({
            id: userSaved._id,
            username: userSaved.username,
            email: userSaved.email,
            rol: userSaved.rol,
            createdAt: userSaved.createdAt,
            updatedAt: userSaved.updatedAt,
            message: "Usuario creado correctamente",
        });
    } catch (error) {
        console.log(error);
        res.status(500).send("Registration failed");
    }
};

const login = async (req, res) => {
    const {  email, password } = req.body;
    try {
        const userFound = await User.findOne({email});
        if (!userFound) return res.status(400).json({ message: 'user not found'})
        console.log("mail verificado");
        const isMatch = await bcrypt.compare(password, userFound.password);
        if (!isMatch) return res.status(400).json({message: "Incorrect password"});
        console.log("contraseña verificada");
        

        
        const token = await createAccessToken({id: userFound._id, username: userFound.username, email: userFound.email, rol: userFound.rol}) // encriptacion de los datos del usuario en token para usarlos en el front.

        console.log('Token generado:', token);


        res.cookie('token', token); 

        res.json({
            id: userFound._id,
            username: userFound.username,
            username: userFound.username,
            email: userFound.email,
            rol: userFound.rol,
            createdAt: userFound.createdAt, 
            updatedAt: userFound.updatedAt,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send("login failed");
    }
};

const logout = async (req, res) => {
    res.cookie('token', "", {expires: new Date(0)})
    return res.sendStatus(200);
}

const profile = async (req, res) => {
    try {
        const userFound = await User.findById(req.params.id);

        if (!userFound) {
            return res.status(400).json({ message: "User not found" });
        }

        return res.json({
            id: userFound._id,
            username: userFound.username,
            email: userFound.email,
            createdAt: userFound.createdAt,
            updatedAt: userFound.updatedAt,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};


const updateProfile = async (req, res) => {
    const actualizarProfile = await User.findByIdAndUpdate(req.params.id, req.body, {new: true});
    if(!actualizarProfile) {
        return res.status(404).json({message: "No se ha encontrado el perfil"})}
    return res.json({
            id: actualizarProfile._id,
            username: actualizarProfile.username,
            email: actualizarProfile.email,
            createdAt: actualizarProfile.createdAt,
            updatedAt: actualizarProfile.updatedAt,
        });
};
module.exports = { register, login, logout, profile, updateProfile };

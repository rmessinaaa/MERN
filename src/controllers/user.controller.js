const User = require('../models/user.models');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const createAccessToken = require("../services/generar-jwt");





const register = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const passwordHash = await bcrypt.hash(password, 10);
        const newUser = new User({
            username,
            email,
            password: passwordHash
        });

        const userSaved = await newUser.save();
        const token = await createAccessToken({id: userSaved._id})

        res.cookie('token', token).json({
            id: userSaved._id,
            username: userSaved.username,
            email: userSaved.email,
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
        if (!userFound) return res.status(400).json({ message: 'hola'})
        const isMatch = await bcrypt.compare(password, userFound.password);
        if (!isMatch) return res.status(400).json({message: "Incorrect password"});
        

        
        const token = await createAccessToken({id: userFound._id})

        res.cookie('token', token); 

        res.json({
            id: userFound._id,
            username: userFound.username,
            username: userFound.username,
            email: userFound.email,
            createdAt: userFound.createdAt, 
            updatedAt: userFound.updatedAt,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send("Registration failed");
    }
};
module.exports = { register, login };

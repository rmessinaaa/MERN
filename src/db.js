const mongoose = require('mongoose');

const connectDB = async () => {
    try{
        await mongoose.connect('mongodb+srv://renatomessina14:4aXMnlozFBJttNSk@cluster0.tffs3g1.mongodb.net/Sinergia');
        console.log('DB connected');
    } catch (error) {
    console.log(error);
}}

module.exports = connectDB;
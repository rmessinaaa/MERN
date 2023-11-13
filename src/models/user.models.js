const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username : {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    rol: {
        type: String,
        enum: ['donante', 'institucion'],
        required: true,
        default: 'donante'
    },
}, {
    timestamps: true
    

   
})

module.exports = mongoose.model('User', userSchema);

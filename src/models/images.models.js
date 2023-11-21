const mongoose = require('mongoose');

const schemaImage = new mongoose.Schema({
    filename: {
        type: String,
        required: false,
        trim: true
    },
    campana: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'campana',
        required: false
    },
    description: {
        type: String,
        default: "Imagen"
    },
    path: {
        type: String
    },
    originalname: {
        type: String,
        },
    mimetype: {
        type: String
        },
    size: {
        type: Number
         },
    created_at: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('Image', schemaImage);

const mongoose = require('mongoose');

const schemaImage = new mongoose.Schema({
    image: {
        type: String,
        required: true,
        trim: true
    },
    campana: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'campana',
        required: true
    },
    description: {
        
    }
})

module.exports = mongoose.model('Image', schemaImage);

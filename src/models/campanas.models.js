const mongoose = require('mongoose');

const schemaCampana = new mongoose.Schema({
    title: {
        type: String,
        required: true, 
        unique: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    date: {
        type: Date,
        default: Date.now, 
    }    
},
    {
        timestamps: true
    }
)


module.exports = mongoose.model('campana', schemaCampana);


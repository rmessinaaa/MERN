const mongoose = require('mongoose');

const schemaDonation = new mongoose.Schema({
    donation: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now, 
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
},
    {
        timestamps: true
    }
)


module.exports = mongoose.model('donation', schemaDonation);

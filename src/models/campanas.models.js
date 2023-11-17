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
    meta: {
        type: Number,
        required: true,
        trim: true
    },
    calculation: {
        type: Number,
        required: false,
        trim: true,
        default: 0
    },
    account: {
        banco : {
            type: String,
            required: true,
            trim: true,
            enum: ["Banco Estado", ]
            },
        accountNum: {
            type: Number,
            required: true,
            trim: true
            },
        accountType: {
            type: String,
            required: true,
            trim: true
            },
        email: {
            type: String,
            required: true,
            trim: true
            }
        },
    category: {
        type: String,
        required: true,
        trim: true,
        enum: ["Vivienda", "Salud", "Educación", "Infancia", "Rural"]
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


module.exports = mongoose.model('campana', schemaCampana);


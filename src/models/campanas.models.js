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
            enum: ["Banco Estado", ],
            default: "Banco Estado"
            },
        accountNum: {
            type: Number,
            required: true,
            trim: true,
            default: 10
            },
        accountType: {
            type: String,
            required: true,
            trim: true,
            enum: ["Cuenta Corriente", "Cuenta Vista", "Cuenta Rut"],
            default: "Cuenta Rut"
            },
        email: {
            type: String,
            required: true,
            trim: true,
            default: "campana@campana.com"
            }
        },
    category: {
        type: String,
        required: true,
        trim: true,
        enum: ["Vivienda", "Salud", "Educación", "Infancia", "Rural"],
        default: "Vivienda"
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


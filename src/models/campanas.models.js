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
            enum: ["BANCO ESTADO", "SCOTIABANK", "BANCO DE CHILE/EDWARDS CITI"],
            default: "BANCO ESTADO"
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
    location: {
        type: String,
        required: true,
        trim: true,
        enum: [
            "Región de Arica y Parinacota",
            "Región de Tarapacá",
            "Región de Antofagasta",
            "Región de Atacama",
            "Región de Coquimbo",
            "Región de Valparaíso",
            "Región Metropolitana",
            "Región del Libertador General Bernardo O'Higgins",
            "Región del Maule",
            "Región de Ñuble",
            "Región del Biobío",
            "Región de La Araucanía",
            "Región de Los Ríos",
            "Región de Los Lagos",
            "Región de Aysén del General Carlos Ibáñez del Campo",
            "Región de Magallanes y de la Antártica Chilena"],
        default: "Región Metropolitana"
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
    image : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Image',
        required: true
    }
},
    {
        timestamps: true
    }
)


module.exports = mongoose.model('campana', schemaCampana);


//Para trabajar con mongoose en los esquemas
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const almacenamientoSchema = new Schema({
    nombreP: {
        type: String
    },
    precioP: {
        type: Number
    },
    cantidad:  {
        type: Number
    },
},{
    collection: "almacenamiento"
});

//Se exportara el modulo y coleccion
module.exports = mongoose.model('almacenamiento', almacenamientoSchema);

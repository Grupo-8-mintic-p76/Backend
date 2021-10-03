const express = require("express");
const almacenarController = require("../controllers/almacenarController.js");


//Clase de en rutado para el crud de almacenamiento
class AlmacenarRouter{

    constructor(){
        this.router = express.Router();
        this.configuracion();
    }
    //configuracion del enrutado
    configuracion(){
    //Usó de la clase almacenarController para llamar sus metodos
        const almacenarC = new almacenarController.default();

        this.router.get('/almacenar', almacenarC.getProductos);
        this.router.post('/almacenar', almacenarC.register);
        this.router.delete('/almacenar', almacenarC.deleteProduct);
        this.router.put('/almacenar', almacenarC.setProducto);
    }
}
exports.default = AlmacenarRouter;
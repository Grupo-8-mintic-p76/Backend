// Importacion de librerias
const express = require("express");
const mongoose = require("mongoose");

//Para la coneccion a BD
const basedatos = require("./database/db.js")
const AlmacernarRouters = require("./routers/almacenarRouters.js");


//clase que levanta el servidor
class Server{

    constructor(){
        this.configurar();
        this.connectBd();
    }
    // metodo para configurar el servidor
    configurar(){

        this.app = express(); //variable que representa el servidor
    
        this.app.set("port", process.env.PORT || 3000); //puerto de acceso al servidor
    //Indicar que se manejarán solicitudes con infor macion de tipo JSON
        this.app.use(express.json()); 
    
    //Rutas
        const router = express.Router(); 
        router.get('/', (req, res)=>{
            console.log('nueva conexion');
            res.status(200).json({message: "Conexión exitosa"});
        });

    //Agregar la ruta de almacenar
        const almacenarR = new AlmacernarRouters.default(); //crear un objeto
        this.app.use(almacenarR.router);
    //agregar la ruta a la app express
            this.app.use(router);

    //Levantar el servidor web
        this.app.listen( this.app.get('port'), ()=>{
            console.log("Servidor corriendo por el puerto => ", this.app.get('port'))
        });
    }

    //Metodo de conexion a la base de datos
    connectBd(){
        mongoose.connect(basedatos.db).then(()=>{
            console.log("Conexión exitosa a la BD")
        }).catch(error=>{
            console.log(error);
        })
    }
}

//Se accede a la clase server
const objServer = new Server();
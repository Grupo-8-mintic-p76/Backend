//Se importa el modelo para editar el crud
const almacenamiento = require("../modells/almacenamientoTienda.js");

//clase del controlador
class AlmacenarController {
    //se escribe un metodo constructor por defecto
    constructor(){

    }

    //metodo getter para obtener los productos almacenados
    getProductos(req, res){
        almacenamiento.find((error, data)=>{
            if(error){
                res.status(500).send();
            }else{
                res.status(200).json(data);
            }
        });
    }
//Metodo para registrar nuevos productos
    register(req, res){
        almacenamiento.create(req.body, (error, data)=>{
            if(error){
                res.status(500).json(error);
            }else{
                res.status(201).json(data);
            }
        });
    }
    deleteProduct(req, res){ 
        let id = req.body.id;
        almacenamiento.findByIdAndRemove(id, (error, data)=>{
            if(error){
                res.status(500).send();
            }else{
                res.status(200).json(data);
            }
        });
    }

    setProducto(req, res){
        let {id, nombreP, precioP, cantidad} = req.body;
        //se crea un objeto json que contendra los datos que se actualizaran
        let objAlmacernar = {
            nombreP,
            precioP,
            cantidad
        };
        //El metodo entra a buscar el elemento por medio del id
        almacenamiento.findByIdAndUpdate(id, {$set: objAlmacernar}, 
            (error,data)=>{
                if(error){
                    res.status(500).send();
                }else{
                    res.status(200).json(data);
                }
            });
    }
}
exports.default = AlmacenarController;
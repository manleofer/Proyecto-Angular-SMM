//Inmportación del módulo "express" que facilita el manejo de rutas y solicitudes HTTP
const express = require('express');

//Creación de enrutador (manejará las rutas)
const router = express.Router();

//Importación del controlador
const alumnoController = require('../controladores/alumnoController');


//Definición de rutas para las operaciones CRUD
router.delete('/delete:id', alumnoController.deleteAlumno);


//Exportación del enrutador
module.exports = router;
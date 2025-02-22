//Inmportación del módulo "express" que facilita el manejo de rutas y solicitudes HTTP
const express = require('express');

//Creación de enrutador (manejará las rutas)
const router = express.Router();

//Importación del controlador
const alumnoController = require('../controllers/alumnoController');

//Definición de rutas para las operaciones CRUD
router.get('/all', alumnoController.getAlumno)
router.post('/insert', alumnoController.createAlumno);


router.delete('/delete:idAlumno', alumnoController.deleteAlumno);


//Exportación del enrutador
module.exports = router;
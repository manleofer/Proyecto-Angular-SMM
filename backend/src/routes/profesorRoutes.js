//Inmportación del módulo "express" que facilita el manejo de rutas y solicitudes HTTP
const express = require('express');

//Creación de enrutador (manejará las rutas)
const router = express.Router();

//Importación del controlador
const profesorController = require('../controllers/profesorController');

//Definición de rutas para las operaciones CRUD
router.post('/insert', profesorController.createProfesor);
router.delete('/delete/:idProfesor', profesorController.deleteProfesor);




//Exportación del enrutador
module.exports = router;
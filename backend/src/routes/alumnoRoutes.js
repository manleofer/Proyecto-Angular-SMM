const express = require("express");
const router = express.Router();
const bbdd = require("../config/bbdd");

//Añadir un alumno en la bbdd
router.post("/insert", (req, res) => {
    console.log("Datos recibidos:", req.body); //Ver qué datos llegan desde Angular
    const {nombre, telefono} = req.body;

    if(!nombre || !telefono) {
        return res.status(400).json({message: "Todos los campos son obligatorios"});
    }

    const sql = "INSERT INTO alumno (nombre, telefono) VALUES (?, ?)";
    bbdd.query(sql, [nombre, telefono], (error, result) => {
        if(error) {
            return res.status(500).json({ error: "Error al insertar el alumno", details: error });
        }
        res.status(201).json({ message: "Alumno insertado con éxito", idAlumno: result.insertId });
    });
});
module.exports = router;
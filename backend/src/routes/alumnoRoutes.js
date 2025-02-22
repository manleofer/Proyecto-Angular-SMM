const express = require("express");
const router = express.Router();
const bbdd = require("../config/bbdd");

//Añadir un alumno en la bbdd
router.post("/insert", (req, res) => {
    console.log("Datos recibidos:", req.body); //
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

// Obtener listado de alumnos
router.get("/listado", (req, res) => {
    const sql = "SELECT * FROM alumno";

    bbdd.query(sql, (err, results) => {
        if (err) {
            return res.status(500).json({ error: "Error al obtener alumnos", err });
        }
        res.status(200).json(results);
    });
});

module.exports = router;
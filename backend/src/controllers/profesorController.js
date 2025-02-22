//Importar la configuración de la BD
const bbdd = require("../../config/bbdd");


//CONSULTA PROFESOR




//CREAR PROFESOR
const createProfesor = (req, res) => {
    console.log("Datos recibidos:", req.body); //
    const {nombre, telefono} = req.body;

    if(!nombre || !telefono) {
        return res.status(400).json({message: "Todos los campos son obligatorios"});
    }

    const sql = "INSERT INTO profesor (nombre, telefono) VALUES (?, ?)";
    bbdd.query(sql, [nombre, telefono], (error, result) => {
        if(error) {
            return res.status(500).json({ error: "Error al insertar el profesor", details: error });
        }
        res.status(201).json({ message: "Profesor insertado con éxito", idProfesor: result.insertId });
    });
};



//MODIFICAR ALUMNO



//BORRAR ALUMNO




//Exportar los métodos
module.exports = { createProfesor };








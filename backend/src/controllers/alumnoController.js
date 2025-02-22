//Importar la configuración de la BD
const bbdd = require("../../config/bbdd");


//CONSULTA ALUMNO




//CREAR ALUMNO
const createAlumno = (req, res) => {
    console.log("Datos recibidos:", req.body);
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
};




//MODIFICAR ALUMNO




/*
//BORRAR ALUMNO
function deleteAlumno(req, res) {
  const id = req.params.id; //Captura el parámetro de la ruta

  bbdd.query(
    "DELETE FROM alumno WHERE idAlumno = ?",
    [id],
    (error, resultado) => {
      if (error) {
        res.status(500).json({ error: "Error al eliminar alumno" });
      } else if (resultado.affectedRows === 0) {
        res.status(404).json({ error: "Alumno no encontrado" });
      } else {
        res.status(200).json({ message: "Alumno eliminado con éxito" });
      }
    }
  );
}
*/


//Exportar los métodos
module.exports = { createAlumno };

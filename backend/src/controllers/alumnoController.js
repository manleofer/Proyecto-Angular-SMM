//Importar la configuración de la BD
const bbdd = require("../../config/bbdd");


//CONSULTA ALUMNO



//CREAR ALUMNO



//MODIFICAR ALUMNO



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

//Exportar los métodos
module.exports = { deleteAlumnos };

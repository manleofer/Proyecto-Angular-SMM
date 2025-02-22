//Importar la configuración de la BD
const bbdd = require("../../config/bbdd");


//CONSULTA PROFESOR
const getProfesores = (req, res) => {
    const sql = "SELECT * FROM profesor";
  
    bbdd.query(sql, (err, resultado) => {
      if (err) {
        return res.status(500).json({ error: "Error al obtener profesores", err });
      }
      res.status(200).json(resultado);
    });
  };



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



//MODIFICAR PROFESOR



//BORRAR PROFESOR
const deleteProfesor = (req, res) => {
    const { idProfesor } = req.params; // Recupero el idProfesor que se manda en la solicitud (desde frontend)
  
    // Intrucción SQL para eliminar el profesor por idProfesor
    const query = "DELETE FROM profesor WHERE idProfesor = ?";
  
    bbdd.query(query, [idProfesor], (error, resultado) => {
      if (error) {
        return res
          .status(500)
          .json({ message: "Error al eliminar el profesor", error });
      }
        if (resultado.affectedRows === 0) {
        //Si la instrucción DELETE no afecta a ningún registro significa que el profesor no existe
        return res.status(404).json({ message: "Profesor no encontrado" });
      }
      res.status(200).json({ message: "Profesor eliminado correctamente" });
    });
  };




//Exportar los métodos
module.exports = { getProfesores, createProfesor, deleteProfesor };








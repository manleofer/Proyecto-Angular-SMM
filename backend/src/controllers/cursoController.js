//Importar la configuración de la BD
const bbdd = require("../../config/bbdd");

//CONSULTA CURSO
const getCursos = (req, res) => {
  const sql = "SELECT * FROM curso";

  bbdd.query(sql, (err, resultado) => {
    if (err) {
      return res.status(500).json({ error: "Error al obtener cursos", err });
    }
    res.status(200).json(resultado);
  });
};



//CREAR CURSO
const createCurso = (req, res) => {
  console.log("Datos recibidos:", req.body); //
  const { nombre, codigo, duracion, cuota } = req.body;

  if (!nombre || !codigo || !duracion || !cuota) {
    return res
      .status(400)
      .json({ message: "Todos los campos son obligatorios" });
  }

  const sql =
    "INSERT INTO curso (nombre, codigo, duracion, cuota) VALUES (?, ?, ?, ?)";
  bbdd.query(sql, [nombre, codigo, duracion, cuota], (error, result) => {
    if (error) {
      return res
        .status(500)
        .json({ error: "Error al insertar el curso", details: error });
    }
    res
      .status(201)
      .json({ message: "Curso insertado con éxito", idCurso: result.insertId });
  });
};


//MODIFICAR CURSO



//BORRAR CURSO
const deleteCurso = (req, res) => {
  const { idCurso } = req.params; // Recupero el idCurso que se manda en la solicitud (desde frontend)

  // Intrucción SQL para eliminar el profesor por idCurso
  const query = "DELETE FROM curso WHERE idCurso = ?";

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
module.exports = { getCursos, createCurso, deleteCurso };

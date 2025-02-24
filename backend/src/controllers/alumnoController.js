//Importar la configuración de la BD
const bbdd = require("../../config/bbdd");

//CONSULTA ALUMNO
const getAlumnos = (req, res) => {
  const sql = "SELECT * FROM alumno";

  bbdd.query(sql, (err, results) => {
    if (err) {
      return res.status(500).json({ error: "Error al obtener alumnos", err });
    }
    res.status(200).json(results);
  });
};

//CREAR ALUMNO
const createAlumno = (req, res) => {
  console.log("Datos recibidos:", req.body); //
  const { nombre, telefono } = req.body;

  if (!nombre || !telefono) {
    return res
      .status(400)
      .json({ message: "Todos los campos son obligatorios" });
  }

  const sql = "INSERT INTO alumno (nombre, telefono) VALUES (?, ?)";
  bbdd.query(sql, [nombre, telefono], (error, result) => {
    if (error) {
      return res
        .status(500)
        .json({ error: "Error al insertar el alumno", details: error });
    }
    res.status(201).json({
      message: "Alumno insertado con éxito",
      idAlumno: result.insertId,
    });
  });
};

//MODIFICAR ALUMNO
const updateAlumno = (req, res) => {
  const idAlumno  = parseInt(req.params.idAlumno);
  const { nombre, telefono } = req.body;

  if (!nombre || !telefono) {
    return res.status(400).json({ message: "Todos los campos son obligatorios" });
  }

  const sql = "UPDATE alumno SET nombre = ?, telefono = ? WHERE idAlumno = ?";
  bbdd.query(sql, [nombre, telefono, idAlumno], (error, result) => {
    if (error) {
      return res.status(500).json({ message: "Error al actualizar el alumno", error });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Alumno no encontrado" });
    }

    res.status(200).json({ message: "Alumno actualizado correctamente" });
  });
};

//BORRAR ALUMNO
const deleteAlumno = (req, res) => {
  const { idAlumno } = req.params; // Recupero el idAlumno que se manda en la solicitud (desde frontend)

  // Intrucción SQL para eliminar el alumno por idAlumno
  const query = "DELETE FROM alumno WHERE idAlumno = ?";

  bbdd.query(query, [idAlumno], (error, resultado) => {
    if (error) {
      return res
        .status(500)
        .json({ message: "Error al eliminar el alumno", error });
    }

    if (resultado.affectedRows === 0) {
      //Si la instrucción DELETE no afecta a ningún registro significa que el alumno no existe
      return res.status(404).json({ message: "Alumno no encontrado" });
    }
    res.status(200).json({ message: "Alumno eliminado correctamente" });
  });
};

//INSCRIBIR ALUMNO
const inscribirAlumno = (req, res) => {
  console.log("Datos recibidos:", req.body); //
  const { idAlumno, idCurso } = req.body;

  if (!idAlumno || !idCurso) {
    return res
      .status(400)
      .json({ message: "Todos los campos son obligatorios" });
  }

  const sql = "INSERT INTO alumno_curso (idAlumno, idCurso) VALUES (?, ?)";
  bbdd.query(sql, [idAlumno, idCurso], (error, result) => {
    if (error) {
      return res
        .status(500)
        .json({ error: "Error al realizar la inscripción", details: error });
    }
    res.status(201).json({
      message: "Inscripción insertada con éxito",
    });
  });
};
//Exportar los métodos
module.exports = { getAlumnos, createAlumno, updateAlumno, deleteAlumno, inscribirAlumno };

//Importar la configuración de la BD
const bbdd = require("../../config/bbdd");

//CONSULTA CURSO




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



//Exportar los métodos
module.exports = { createCurso };

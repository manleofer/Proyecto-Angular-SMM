const express = require("express");
const cors = require("cors");

const app= express();
const alumnoRoutes = require("./routes/alumnoRoutes");

app.use(cors());
app.use(express.json());  //para recibir json en las peticiones (habilita json en las peticiones)

//Rutas
/* //Ruta de prueba
app.get("/", (req, res) => {
    res.send("Servidor Node.js funcionando");
}); */

app.use("/api/alumnos", alumnoRoutes);  //carga las rutas de alumno

// Iniciar el servidor
app.listen(3000, () => {
    console.log("Servidor corriendo en http://localhost:3000");
});
const express = require('express');
const cors = require("cors");

const app = express();

const alumnoRoutes = require("./src/routes/alumnoRoutes");
const profesorRoutes = require("./src/routes/profesorRoutes");
const cursoRoutes = require("./src/routes/cursoRoutes");



const PORT = 3000;

// Habilitar el uso de CORS para hacer peticiones HTTP desde cualquier dominio o servidor
app.use(cors());
// Habilitar el uso de JSON en peticiones
app.use(express.json());


// Rutas definidas
app.use('/api/alumnos', alumnoRoutes);
app.use("/api/profesores", profesorRoutes); 
app.use("/api/cursos", cursoRoutes); 



// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
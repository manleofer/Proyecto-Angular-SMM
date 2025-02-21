const express = require('express');

const app = express();
const alumnoRoutes = require('./src/routes/alumnoRoutes'); 


const PORT = 3000;

// Habilitar el uso de JSON en peticiones
app.use(express.json());


// Rutas definidas
app.use('api/alumnos', alumnoRoutes);


// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
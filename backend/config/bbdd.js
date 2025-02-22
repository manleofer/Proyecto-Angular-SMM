//Importar parquete mysql para poder realizar la conexión
const mysql = require("mysql2");

//Crear la coneción con los parámetros necesarios
const bbdd = mysql.createConnection({
    host: "localhost",
    port: 3307,
    user: "usuario",
    password: "usuario",
    database: "academia_programacion"
});

//Conectar a la BD y capturar posibles errores
bbdd.connect((error) => {
    if(error) {
        console.error("Error conectando a la base de datos:", error);
    } else {
        console.log("Conectado a MySQL");
    }
});

//Exportar conexión para usarla en otros archivos
module.exports = bbdd;
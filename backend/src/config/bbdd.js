const mysql = require("mysql2");

//Configurar conexión a MySQL
const bbdd = mysql.createConnection({
    host: "localhost",
    user: "usuario",
    password: "usuario",
    database: "academia_programacion"
});

//Conectar a MySQL
bbdd.connect((error) => {
    if(error) {
        console.error("Error conectando a la base de datos:", error);
    } else {
        console.log("Conectado a MySQL");
    }
});
module.exports = bbdd;

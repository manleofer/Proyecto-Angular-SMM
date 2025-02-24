# 📛 Aplicación Didáctica con Angular y Node.js

## 🎯 Objetivo del Proyecto

Este proyecto se ha desarrollado como trabajo académico dentro del módulo de Libre Configuración del segundo curso del Ciclo Superior de Desarrollo de Aplicaciones Web (DAW), impartido por el profesor Ramón J. Morales.


## 👨‍🎓 Autores

- Manuel León Sánchez
- Sandra Moriana Herrera
- M. Carmen Ruiz Sánchez


## 🛠️ Descripción del Proyecto

Este proyecto es una aplicación web didáctica desarrollada con las últimas versiones de Angular para el frontend y Node.js para el backend. Su propósito principal es servir como recurso de aprendizaje para estudiantes interesados en el desarrollo web con Angular, cubriendo sus principales funcionalidades:

- ✅ **Directivas y Componentes**
- ✅ **Manejo de eventos**
- ✅ **Formularios**
- ✅ **Enrutamiento**
- ✅ **Acceso a datos y comunicación con un backend en Node.js**

En la última sección del proyecto, titulada **"Acceso a Datos"**, se implementa una aplicación que realiza operaciones CRUD sobre una base de datos SQL en el contexto de gestión de una academia.


## 🚀 Tecnologías Utilizadas

| Tecnología  | Versión | Descripción |
|------------|---------|-------------|
| Angular    | Última  | Framework frontend |
| Node.js    | Última  | Servidor backend |
| Express.js | Última  | Framework web para Node.js |
| MySQL      | Última  | Base de datos relacional |


## 💂️️ Estructura del Proyecto
📦 proyecto-angular-smm
┣ 📂 backend   # Servidor Node.js con Express y Cors
┃ ┣ 📂 congig
┃ ┃ ┗ 📄 bbdd.js  # Archivo de configuración de la base de datos
┃ ┣ 📂 database
┃ ┃ ┗ 📄 bd-academia-angular.sql  # Script SQL para la base de datos
┃ ┣ 📂 src  
┃ ┃ ┣ 📂 controllers  # Controladores que incluyen la lógica de negocio
┃ ┃ ┣ 📂 routes  # Configuración de rutas empleadas en peticiones HTTP
┃ ┃ ┣ 📄 server.js  # Configuración de la conexión al servidor Node.js
┃ ┃ ┗ 📄 ...  # Otros ficheros
┣ 📂 frontend   # Aplicación Angular
┃ ┣ 📂 src
┃ ┃ ┣ 📂 app
┃ ┃ ┃ ┣ 📂 components  # Componentes empleados en el desarrollo frontend
┃ ┃ ┃ ┣ 📂 services  # Servicios empleados en el desarrollo frontend
┃ ┃ ┃ ┣ 📄 app.congif.ts  # Configuración de la aplicación Angular
┃ ┃ ┃ ┣ 📄 app.routes.ts  # Configuración del enrutamiento del menú frontend
┃ ┃ ┃ ┗ 📄 ...  # Otros ficheros del componente principal
┃ ┃ ┣ 📄 index.html  # Página de inicio o arranque
┃ ┃ ┣ 📄 main.ts  # Typescript de inicio
┃ ┃ ┣ 📄 style.css  # Estilo CSS base o general
┃ ┣ 📄 README.md  # Este archivo
┗ ┗ 📄 ...  # Otros ficheros de configuración


## ⚙️ Configuración y Despliegue

### Clonar el repositorio
git clone [https://github.com/manleofer/Proyecto-Angular-SMM.git]

### Instalación de Dependencias
Asegúrate de tener instalado [Node.js](https://nodejs.org/) y [Angular CLI](https://angular.io/cli).

#### Instalar dependencias del backend
cd backend
npm install

#### Instalar dependencias del frontend
cd ../frontend
npm install

### Configuración de la Base de Datos
- Debes desplegar o inicializar el SGBD. En nuestro caso, hemos utilizado MySQL desplegando tanto contenedores Docker como a través de XAMPP (servidor Apache).
- En MySQL o el SGBD que se utilice (SQL) debes crear un usuario "usuario" con privilegios de administrador, con contraseña "usuario".
- Debes importar el archivo SQL disponible en la ruta del proyecto: backend/database/bd-academia-angular.sql

### Levantar la aplicación

#### Iniciar el backend en localhost:3000
cd backend
node server.js

#### Iniciar el frontend en localhost:4200
cd ../frontend
ng serve --open

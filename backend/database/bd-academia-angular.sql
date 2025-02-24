CREATE DATABASE IF NOT EXISTS academia_programacion;
USE academia_programacion;

CREATE TABLE alumno (
  idAlumno INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(50) NOT NULL,
  telefono INT NOT NULL
);

CREATE TABLE profesor (
  idProfesor INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(50) NOT NULL,
  telefono INT NOT NULL
);

CREATE TABLE curso (
  idCurso INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(50) NOT NULL,
  codigo VARCHAR(10) NOT NULL UNIQUE,
  duracion INT NOT NULL, 
  cuota FLOAT NOT NULL,
  idProfesor INT NOT NULL,
  FOREIGN KEY (idProfesor) REFERENCES profesor(idProfesor) ON DELETE RESTRICT
);

CREATE TABLE alumno_curso (
  idAlumno INT,
  idCurso INT,
  PRIMARY KEY (idAlumno, idCurso),
  FOREIGN KEY (idAlumno) REFERENCES alumno(idAlumno) ON DELETE CASCADE,
  FOREIGN KEY (idCurso) REFERENCES curso(idCurso) ON DELETE CASCADE
);

-- Inserción de tres profesores
INSERT INTO profesor (nombre, telefono) VALUES 
  ('Ramón J. Morales', 610111222),
  ('Juan Tagua', 610333444),
  ('Manuel Hans', 610555666);

-- Inserción de tres cursos asignando profesores
INSERT INTO curso (nombre, codigo, duracion, cuota, idProfesor) VALUES 
  ('JavaScript', 'JS101', 40, 150.00, 1),  
  ('Sistemas de control de versiones', 'GIT202', 60, 200.00, 2), 
  ('Java y Spring', 'JAVA303', 30, 120.00, 3); 

-- Inserción de tres alumnos
INSERT INTO alumno (nombre, telefono) VALUES 
  ('Manuel León', 600111222),
  ('Sandra Moriana', 600333444),
  ('Mari Carmen Ruiz', 600555666);

-- Asignación de alumnos a cursos (relación N:M)
INSERT INTO alumno_curso (idAlumno, idCurso) VALUES 
  (1, 1), 
  (1, 3), 
  (2, 1), 
  (2, 2), 
  (3, 1),
  (3, 3);
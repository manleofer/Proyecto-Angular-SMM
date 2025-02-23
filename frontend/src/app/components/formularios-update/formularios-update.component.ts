import { Component, OnInit } from '@angular/core';
import { AlumnoService } from '../../services/alumno.service';
import { ProfesorService } from '../../services/profesor.service';
import { CursoService } from '../../services/curso.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-formularios-update',
  imports: [FormsModule, CommonModule],
  templateUrl: './formularios-update.component.html',
  styleUrl: './formularios-update.component.css'
})
export class FormulariosUpdateComponent implements OnInit {
  alumnos: any[] = [];
  profesores: any[] = [];
  cursos: any[] = [];

  // Objetos para el formulario de actualización
  alumno = { idAlumno: '', nombre: '', telefono: '' };
  profesor = { idProfesor: '', nombre: '', telefono: '' };
  curso = { idCurso: '', nombre: '', codigo: '', duracion: '', cuota: '' };

  idAlumnoSelect: string = "";
  idProfesorSelect: string = "";
  idCursoSelect: string = "";

  constructor(
    private alumnoService: AlumnoService,
    private profesorService: ProfesorService,
    private cursoService: CursoService
  ) {}

  ngOnInit(): void {
    this.obtenerAlumnos();
    this.obtenerProfesores();
    this.obtenerCursos();
  }

  obtenerAlumnos(): void {
    this.alumnoService.getAlumnos().subscribe({
      next: (data) => {
        console.log('Alumnos en BD:', data);
        this.alumnos = data;
      },
      error: (error) => console.error('Error al obtener los alumnos.', error)
    });
  }

  obtenerProfesores(): void {
    this.profesorService.getProfesores().subscribe({
      next: (data) => {
        console.log('Profesores en BD:', data);
        this.profesores = data;
      },
      error: (error) => console.error('Error al obtener los profesores.', error)
    });
  }

  obtenerCursos(): void {
    this.cursoService.getCursos().subscribe({
      next: (data) => {
        console.log('Cursos en BD:', data);
        this.cursos = data;
      },
      error: (error) => console.error('Error al obtener los cursos.', error)
    });
  }

  // Método para seleccionar un Alumno y cargar sus datos en el formulario
seleccionarAlumno(idAlumno: string) {
  this.idAlumnoSelect = idAlumno; // Asegura que el select refleje la selección
  const alumnoSeleccionado = this.alumnos.find(alumno => alumno.idAlumno === idAlumno);
  if (alumnoSeleccionado) {
    this.alumno = { ...alumnoSeleccionado }; // Clona el objeto para evitar modificar la lista original
  }
}

// Método para seleccionar un Profesor y cargar sus datos en el formulario
seleccionarProfesor(idProfesor: string) {
  this.idProfesorSelect = idProfesor; // Asegura que el select refleje la selección
  const profesorSeleccionado = this.profesores.find(profesor => profesor.idProfesor === idProfesor);
  if (profesorSeleccionado) {
    this.profesor = { ...profesorSeleccionado };
  }
}

// Método para seleccionar un Curso y cargar sus datos en el formulario
seleccionarCurso(idCurso: string) {
  this.idCursoSelect = idCurso; // Asegura que el select refleje la selección
  const cursoSeleccionado = this.cursos.find(curso => curso.idCurso === idCurso);
  if (cursoSeleccionado) {
    this.curso = { ...cursoSeleccionado };
  }
}
  // Método para actualizar Alumno
  async modificarAlumno() {
    if (this.idAlumnoSelect && this.alumno.nombre && this.alumno.telefono) {
      try {
        const response = await firstValueFrom(this.alumnoService.updateAlumno(this.idAlumnoSelect, this.alumno));
        console.log('Alumno modificado:', response);
        alert('Alumno modificado con éxito');
        this.obtenerAlumnos();
        this.resetAlumno();
      } catch (error) {
        console.error('Error:', error);
        alert('Error al modificar el alumno');
      }
    }
  }

  // Método para actualizar Profesor
  async modificarProfesor() {
    if (this.idProfesorSelect && this.profesor.nombre && this.profesor.telefono) {
      try {
        const response = await firstValueFrom(this.profesorService.updateProfesor(this.idProfesorSelect, this.profesor));
        console.log('Profesor modificado:', response);
        alert('Profesor modificado con éxito');
        this.obtenerProfesores();
        this.resetProfesor();
      } catch (error) {
        console.error('Error:', error);
        alert('Error al modificar el profesor');
      }
    }
  }

  // Método para actualizar Curso
  async modificarCurso() {
    if (this.idCursoSelect && this.curso.nombre && this.curso.codigo && this.curso.duracion && this.curso.cuota) {
      try {
        const response = await firstValueFrom(this.cursoService.updateCurso(this.idCursoSelect, this.curso));
        console.log('Curso modificado:', response);
        alert('Curso modificado con éxito');
        this.obtenerCursos();
        this.resetCurso();
      } catch (error) {
        console.error('Error:', error);
        alert('Error al modificar el curso');
      }
    }
  }

  // Reset de los formularios
  resetAlumno() {
    this.alumno = { idAlumno: '', nombre: '', telefono: '' };
    this.idAlumnoSelect = '';
  }

  resetProfesor() {
    this.profesor = { idProfesor: '', nombre: '', telefono: '' };
    this.idProfesorSelect = '';
  }

  resetCurso() {
    this.curso = { idCurso: '', nombre: '', codigo: '', duracion: '', cuota: '' };
    this.idCursoSelect = '';
  }
}

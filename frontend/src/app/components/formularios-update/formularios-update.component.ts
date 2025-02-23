import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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

  //Emitir evento hacia el componente padre (acceso-datos)
    @Output() operacionUpdate = new EventEmitter<void>();
      /* 
      Esto método permite que cada vez que se realice una operación de actualización correctamente,
      se envíe un evento al elemento padre. Servirá para actualizar el listado de consultas a tiempo real.
      */

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
seleccionarAlumno(idAlumno: number) {
  this.idAlumnoSelect = idAlumno.toString(); // Asegura que el select refleje la selección
  const alumnoSeleccionado = this.alumnos.find(alumno => alumno.idAlumno === Number(idAlumno));
  if (alumnoSeleccionado) {
    this.alumno = { ...alumnoSeleccionado }; // Clona el objeto para evitar modificar la lista original
  }
}

// Método para seleccionar un Profesor y cargar sus datos en el formulario
seleccionarProfesor(idProfesor: number) {
  this.idProfesorSelect = idProfesor.toString(); // Asegura que el select refleje la selección
  const profesorSeleccionado = this.profesores.find(profesor => profesor.idProfesor === Number(idProfesor));
  if (profesorSeleccionado) {
    this.profesor = { ...profesorSeleccionado };
  }
}

// Método para seleccionar un Curso y cargar sus datos en el formulario
seleccionarCurso(idCurso: number) {
  this.idCursoSelect = idCurso.toString();
  const cursoSeleccionado = this.cursos.find(curso => curso.idCurso === Number(idCurso));
  
  if (cursoSeleccionado) {
    this.curso = { ...cursoSeleccionado }; // Copia todas las propiedades correctamente
  } else {
    console.log("No se encontró el curso en la lista.");
  }
}
 // Método para actualizar Alumno
async modificarAlumno() {
  if (!this.idAlumnoSelect) return;

  const alumnoOriginal = this.alumnos.find(a => a.idAlumno === Number(this.idAlumnoSelect));
  if (!alumnoOriginal) return console.error("❌ No se encontró el alumno en la lista.");

  const alumnoActualizado = {
    idAlumno: alumnoOriginal.idAlumno,
    nombre: this.alumno.nombre?.trim() || alumnoOriginal.nombre,
    telefono: Number(this.alumno.telefono) || alumnoOriginal.telefono
  };

  try {
    await firstValueFrom(this.alumnoService.updateAlumno(Number(this.idAlumnoSelect), alumnoActualizado));
    alert("Alumno modificado con éxito ✅");
    this.operacionUpdate.emit();
    this.obtenerAlumnos();
    this.resetAlumno();
  } catch (error) {
    console.error("❌ Error al modificar el alumno:", error);
    alert("Error al modificar el alumno ❌");
  }
}

  // Método para actualizar Profesor
  // Método para actualizar Profesor
async modificarProfesor() {
  if (!this.idProfesorSelect) return;

  const profesorOriginal = this.profesores.find(p => p.idProfesor === Number(this.idProfesorSelect));
  if (!profesorOriginal) return console.error("❌ No se encontró el profesor en la lista.");

  const profesorActualizado = {
    idProfesor: profesorOriginal.idProfesor,
    nombre: this.profesor.nombre?.trim() || profesorOriginal.nombre,
    telefono: Number(this.profesor.telefono) || profesorOriginal.telefono
  };

  try {
    await firstValueFrom(this.profesorService.updateProfesor(Number(this.idProfesorSelect), profesorActualizado));
    alert("Profesor modificado con éxito ✅");
    this.operacionUpdate.emit();
    this.obtenerProfesores();
    this.resetProfesor();
  } catch (error) {
    console.error("❌ Error al modificar el profesor:", error);
    alert("Error al modificar el profesor ❌");
  }
}

  // Método para actualizar Curso
  async modificarCurso() {
    if (!this.idCursoSelect) return;
  
    const cursoOriginal = this.cursos.find(c => c.idCurso === Number(this.idCursoSelect));
    if (!cursoOriginal) return console.error("❌ No se encontró el curso en la lista.");
  
    const cursoActualizado = {
      idCurso: cursoOriginal.idCurso,
      nombre: this.curso.nombre?.trim() || cursoOriginal.nombre,
      codigo: this.curso.codigo?.trim() || cursoOriginal.codigo,
      duracion: Number(this.curso.duracion) || cursoOriginal.duracion,
      cuota: Number(this.curso.cuota) || cursoOriginal.cuota
    };
  
    try {
      await firstValueFrom(this.cursoService.updateCurso(Number(this.idCursoSelect), cursoActualizado));
      alert("Curso modificado con éxito ✅");
      this.operacionUpdate.emit();
      this.obtenerCursos();
      this.resetCurso();
    } catch (error) {
      console.error("❌ Error al modificar el curso:", error);
      alert("Error al modificar el curso ❌");
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

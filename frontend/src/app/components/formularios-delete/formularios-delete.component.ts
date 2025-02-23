import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AlumnoService } from '../../services/alumno.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProfesorService } from '../../services/profesor.service';
import { CursoService } from '../../services/curso.service';

@Component({
  selector: 'app-formularios-delete',
  imports: [FormsModule, CommonModule],
  templateUrl: './formularios-delete.component.html',
  styleUrl: './formularios-delete.component.css'
})

export class FormulariosDeleteComponent implements OnInit {
  //Creo el array donde almacenar los alumnos/profesores/cursos que recibo del backend
  alumnos: any[] = [];
  profesores: any[] = [];
  cursos: any[] = [];

  //Creo variable para almacenar el idAlumno del alumno seleccionado
  idAlumnoSelect: string = "";
  idProfesorSelect: string = "";
  idCursoSelect: string = "";

  //Emitir evento hacia el componente padre (acceso-datos)
  @Output() operacionDelete = new EventEmitter<void>();
    /* 
    Esto método permite que cada vez que se realice una operación de borrado correctamente,
    se envíe un evento al elemento padre. Servirá para actualizar el listado de consultas a tiempo real.
    */


  //Inyección de servicios
  constructor(
    private alumnoService: AlumnoService,
    private profesorService: ProfesorService,
    private cursoService: CursoService
  ) { }


  //Métodos que se ejecutan al cargar el componente
  ngOnInit(): void {
    // Obtener los alumnos existentes en BD
    this.alumnoService.getAlumnos().subscribe({
      next: (data) => {
        console.log('Alumnos en BD: ', data);
        this.alumnos = data;
      },
      error: (error) => {
        console.error('Error al obtener los alumnos.', error);
      }
    });
    // Obtener los profesores existentes en BD
    this.profesorService.getProfesores().subscribe({
      next: (data) => {
        console.log('Profesores en BD: ', data);
        this.profesores = data;
      },
      error: (error) => {
        console.error('Error al obtener los profesores.', error);
      }
    });
    // Obtener los cursos existentes en BD
    this.cursoService.getCursos().subscribe({
      next: (data) => {
        console.log('Cursos en BD: ', data);
        this.cursos = data;
      },
      error: (error) => {
        console.error('Error al obtener los cursos.', error);
      }
    });
  }


  
  //Método para borrar alumno
  eliminarAlumno(): void {
    if (this.idAlumnoSelect) {
      this.alumnoService.deleteAlumno(this.idAlumnoSelect).subscribe({
        next: (response) => {
          this.ngOnInit();  // Vuelvo a recargar los alumnos de la BD
          this.operacionDelete.emit();  //Emito el evento de la operación al componente padre (acceso-datos)
          alert('Alumno eliminado correctamente');
        },
        error: (error) => {
          console.error('Error al eliminar el alumno', error);
          alert('Error al eliminar el alumno');
        }
      });
    } else {
      alert('Es necesario seleccionar un alumno.');
    }
  }

  //Método para borrar profesor
  eliminarProfesor(): void {
    if (this.idProfesorSelect) {
      this.profesorService.deleteProfesor(this.idProfesorSelect).subscribe({
        next: (response) => {
          this.ngOnInit();  // Vuelvo a recargar los profesores de la BD
          this.operacionDelete.emit();  //Emito el evento de la operación al componente padre (acceso-datos)
          alert('Profesor eliminado correctamente');
        },
        error: (error) => {
          console.error('Error al eliminar el profesor', error);
          alert('Error al eliminar el profesor');
        }
      });
    } else {
      alert('Es necesario seleccionar un profesor.');
    }
  }


  //Método para borrar curso
  eliminarCurso(): void {
    if (this.idCursoSelect) {
      this.cursoService.deleteCurso(this.idCursoSelect).subscribe({
        next: (response) => {
          this.ngOnInit();  // Vuelvo a recargar los cursos de la BD
          this.operacionDelete.emit();  //Emito el evento de la operación al componente padre (acceso-datos)
          alert('Curso eliminado correctamente');
        },
        error: (error) => {
          console.error('Error al eliminar el curso', error);
          alert('Error al eliminar el curso');
        }
      });
    } else {
      alert('Es necesario seleccionar un curso.');
    }
  }

}

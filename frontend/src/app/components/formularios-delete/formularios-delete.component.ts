import { Component, OnInit } from '@angular/core';
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
  idSeleccionado: string = "";

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
        this.profesores = data;
      },
      error: (error) => {
        console.error('Error al obtener los cursos.', error);
      }
    });
  }

  //Método para borrar alumno
  eliminarAlumno(): void {
    if (this.idSeleccionado) {
      this.alumnoService.deleteAlumno(this.idSeleccionado).subscribe({
        next: (response) => {
          this.ngOnInit();  // Vuelvo a recargar los alumnos de la BD
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
    if (this.idSeleccionado) {
      this.profesorService.deleteProfesor(this.idSeleccionado).subscribe({
        next: (response) => {
          this.ngOnInit();  // Vuelvo a recargar los profesores de la BD
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
    if (this.idSeleccionado) {
      this.cursoService.deleteCurso(this.idSeleccionado).subscribe({
        next: (response) => {
          this.ngOnInit();  // Vuelvo a recargar los cursos de la BD
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

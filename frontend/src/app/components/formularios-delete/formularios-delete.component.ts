import { Component, OnInit } from '@angular/core';
import { AlumnoService } from '../../services/alumno.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProfesorService } from '../../services/profesor.service';

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

  //Creo variable para almacenar el idAlumno del alumno seleccionado
  idSeleccionado: string = "";

  //Inyección de servicios
  constructor(
    private alumnoService: AlumnoService,
    private profesorService: ProfesorService) { }


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

}

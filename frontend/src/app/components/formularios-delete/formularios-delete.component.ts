import { Component, OnInit } from '@angular/core';
import { AlumnoService } from '../../services/alumno.service';
import { firstValueFrom } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formularios-delete',
  imports: [FormsModule, CommonModule],
  templateUrl: './formularios-delete.component.html',
  styleUrl: './formularios-delete.component.css'
})

export class FormulariosDeleteComponent implements OnInit {
  //Creo el array donde almacenar los alumnos que recibo del backend
  alumnos: any[] = [];

  //Creo variable para almacenar el idAlumno del alumno seleccionado
  idSeleccionado: string = "";

  //Inyección del servicio
  constructor(private alumnoService: AlumnoService) { }


  //Métodos que se ejecutan al cargar el componente
  ngOnInit(): void {
    // Obtener los alumnos existentees en BD
    this.alumnoService.getAlumnos().subscribe({
      next: (data) => {
        console.log('Alumnos en BD: ', data);
        this.alumnos = data;
      },
      error: (error) => {
        console.error('Error al obtener los alumnos.', error);
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


  /*

  ngOnInit(): void {
    this.getAlumnos();
  }

  //Método para obtener todos los alumnos desde el backend
  async getAlumnos(): Promise<void> {
    try {
      const response = await firstValueFrom(this.alumnoService.getAlumnos());
      this.alumnos = response;  
    } catch (error) {
      alert('Error al cargar los alumnos');
    }
  }


  // Método para eliminar el alumno seleccionado
  async eliminarAlumno(): Promise<void> {
    if (this.idSeleccionado === null) {
      alert('Debe seleccionar un alumno');  
      return;
    }
      try {
      const response = await firstValueFrom(this.alumnoService.deleteAlumno(this.idSeleccionado));
      alert('Alumno eliminado correctamente');
      this.getAlumnos();
    } catch (error) {
      alert('Error al eliminar el alumno'); 
    }
  }
*/


}

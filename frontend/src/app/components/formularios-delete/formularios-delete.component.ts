import { Component, OnInit } from '@angular/core';
import { AlumnoService } from '../../services/alumno.service';
import { firstValueFrom } from 'rxjs';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formularios-delete',
  imports: [FormsModule],
  templateUrl: './formularios-delete.component.html',
  styleUrl: './formularios-delete.component.css'
})

export class FormulariosDeleteComponent implements OnInit {
  //Creo el array donde almacenar los alumnos que recibo del backend
  alumnos: any[] = [];

  idSeleccionado: number = 0;

  //Inyección de servicios
  constructor(private alumnoService: AlumnoService) { }

  //Métodos que se ejecutan al cargar el componente
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
}

import { Component } from '@angular/core';
import { AlumnoService } from '../services/alumno.service';
import { FormsModule } from '@angular/forms'; // Importar FormsModule
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-formularios-insert',
  imports: [FormsModule],
  templateUrl: './formularios-insert.component.html',
  styleUrl: './formularios-insert.component.css'
})
export class FormulariosInsertComponent {
  alumno = { nombre: '', telefono: ''};

  constructor(private alumnoService: AlumnoService) {}

    // Método para insertar Alumno
    async insertarAlumno() {
      if (this.alumno.nombre && this.alumno.telefono) {
        try {
          const response = await firstValueFrom(this.alumnoService.insertarAlumno(this.alumno));
          console.log('Alumno insertado:', response);
          alert('Alumno insertado con éxito');
          this.alumno = { nombre: '', telefono: '' };
        } catch (error) {
          console.error('Error:', error);
          alert('Error al insertar el alumno');
        }
      }
    }

}

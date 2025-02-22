import { Component } from '@angular/core';
import { AlumnoService } from '../../services/alumno.service';
import { ProfesorService } from '../../services/profesor.service';
import { CursoService } from '../../services/curso.service';
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
  profesor = { nombre: '', telefono: '' };
  curso = { nombre: '', codigo: '', duracion: '', cuota: '' };

  constructor(private alumnoService: AlumnoService,
    private profesorService: ProfesorService,
    private cursoService: CursoService) {}

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

    // Método para insertar Profesor
  async insertarProfesor() {
    if (this.profesor.nombre && this.profesor.telefono) {
      try {
        const response = await firstValueFrom(this.profesorService.insertarProfesor(this.profesor));
        console.log('Profesor insertado:', response);
        alert('Profesor insertado con éxito');
        this.profesor = { nombre: '', telefono: '' };
      } catch (error) {
        console.error('Error:', error);
        alert('Error al insertar el profesor');
      }
    }
  }

  // Método para insertar Curso
  async insertarCurso() {
    if (this.curso.nombre && this.curso.codigo && this.curso.duracion && this.curso.cuota) {
      try {
        const response = await firstValueFrom(this.cursoService.insertarCurso(this.curso));
        console.log('Curso insertado:', response);
        alert('Curso insertado con éxito');
        this.curso = { nombre: '', codigo: '', duracion: '', cuota: '' };
      } catch (error) {
        console.error('Error:', error);
        alert('Error al insertar el curso');
      }
    }
  }

}

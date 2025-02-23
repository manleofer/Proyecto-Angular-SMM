import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { AlumnoService } from '../../services/alumno.service';
import { lastValueFrom } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ProfesorService } from '../../services/profesor.service';

@Component({
  selector: 'app-consultas',
  imports: [CommonModule],
  templateUrl: './consultas.component.html',
  styleUrl: './consultas.component.css'
})
export class ConsultasComponent implements OnInit {
  alumnos: any[] = [];
  profesores: any[] = [];

  constructor(
    private alumnoService: AlumnoService,
    private profesorService: ProfesorService
  ) { }

  ngOnInit() {
    this.cargarAlumnos();
    this.cargarProfesores();
  }

  async cargarAlumnos() {
    try {
      this.alumnos = await lastValueFrom(this.alumnoService.getAlumnos());
    } catch (error) {
      console.error('Error al obtener alumnos:', error);
    }
  }


  cargarProfesores() {
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

}

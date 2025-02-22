import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { AlumnoService } from '../services/alumno.service';
import { lastValueFrom } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-consultas',
  imports: [CommonModule],
  templateUrl: './consultas.component.html',
  styleUrl: './consultas.component.css'
})
export class ConsultasComponent implements OnInit {
  alumnos: any[] = [];

  constructor(private alumnoService: AlumnoService) { }

  ngOnInit() {
    this.cargarAlumnos();
  }

  async cargarAlumnos() {
    try {
      this.alumnos = await lastValueFrom(this.alumnoService.getAlumnos());
    } catch (error) {
      console.error('Error al obtener alumnos:', error);
    }
  }
}

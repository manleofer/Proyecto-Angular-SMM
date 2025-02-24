import { Component, Input, OnChanges } from '@angular/core';
import { OnInit } from '@angular/core';
import { AlumnoService } from '../../services/alumno.service';
import { lastValueFrom } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ProfesorService } from '../../services/profesor.service';
import { CursoService } from '../../services/curso.service';

@Component({
  selector: 'app-consultas',
  imports: [CommonModule],
  templateUrl: './consultas.component.html',
  styleUrl: './consultas.component.css'
})

export class ConsultasComponent implements OnInit, OnChanges {
[x: string]: any;
  alumnos: any[] = [];
  cursos: any[] =  [];
  profesores: any[] = [];

  // Se declara la propiedad que recibe desde el componente padre (acceso-datos) para refrescar los listados (si ocurre una operacion CRUD)
  @Input() actualizarTablas: boolean = false;

  constructor(
    private alumnoService: AlumnoService,
    private profesorService: ProfesorService,
    private cursoService: CursoService
  ) { }

  // Métodos que se ejecutan al arrancar el componente
  ngOnInit() {
    this.cargarAlumnos();
    this.cargarProfesores();
    this.cargarCursos();
  }

  // Métodos que se ejecutan al cambiar el valor de las propiedades marcadas con @Input
  ngOnChanges() {
    this.cargarAlumnos();
    this.cargarProfesores();
    this.cargarCursos();
  }


  async cargarAlumnos() {
    try {
      this.alumnos = await lastValueFrom(this.alumnoService.getAlumnos());
    } catch (error) {
      console.error('Error al obtener alumnos:', error);
    }
  }

  cargarProfesores() {
    this.profesorService.getProfesores().subscribe((data) => {
      this.profesores = data;
    });

  }

  cargarCursos() {
    this.cursoService.getCursos().subscribe((data) => {
      this.cursos = data;
    });
  }


  

}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { TareasComponent } from "./tareas/tareas.component";
import { IconosComponent } from "./iconos/iconos.component";
import { EventosComponent } from './eventos/eventos.component';
import { FormularioComponent } from './formulario/formulario.component';
import { EnrutamientoComponent } from './enrutamiento/enrutamiento.component';
import { AccesoDatosComponent } from './acceso-datos/acceso-datos.component';
import { FormulariosInsertComponent } from './formularios-insert/formularios-insert.component';
import { DirectivasComponent } from "./directivas/directivas.component";
import { ComponentesComponent } from "./componentes/componentes.component";


@Component({
  selector: 'app-root',
  //Hay que importar CommonModule y FormsModule para poder inyectar las directivas
  imports: [CommonModule, FormsModule, FooterComponent, EventosComponent, FormularioComponent, EnrutamientoComponent, AccesoDatosComponent, DirectivasComponent, ComponentesComponent, FormulariosInsertComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})

export class AppComponent {
  title = 'ProyectoAngular';

  //Creamos una variable booleana iniciada en false y la cambiamos al hacer click
  mostrarTitulo : boolean = true;
  mostrarDirectivas: boolean = false;
  mostrarComponentes: boolean = false;
  mostrarEventos:boolean = false;
  mostrarFormularios: boolean = false;
  mostrarEnrutamiento: boolean = false;
  mostrarAccesoDatos: boolean = false;
  fMostrarDirectivas() {
    this.mostrarDirectivas = true;
    this.mostrarComponentes = false;
    this.mostrarTitulo = false;
    this.mostrarEventos = false;
    this.mostrarFormularios = false;
  }
  fMostrarComponentes(){
    this.mostrarComponentes = true;
    this.mostrarDirectivas = false;
    this.mostrarTitulo = false;
    this.mostrarEventos = false;
    this.mostrarFormularios = false;
  }
  fMostrarTitulo(){
    this.mostrarTitulo = true;
    this.mostrarDirectivas = false;
    this.mostrarComponentes = false;
    this.mostrarEventos = false;
    this.mostrarFormularios = false;
  }
  fMostrarEventos(){
    this.mostrarEventos = true;
    this.mostrarTitulo = false;
    this.mostrarDirectivas = false;
    this.mostrarComponentes = false;
    this.mostrarFormularios = false;
  }
  fMostrarFormularios(){
    this.mostrarFormularios = true;
    this.mostrarTitulo = false;
    this.mostrarDirectivas = false;
    this.mostrarComponentes = false;
    this.mostrarEventos = false;

  }
  fMostrarEnrutamiento(){
    this.mostrarFormularios = false;
    this.mostrarTitulo = false;
    this.mostrarDirectivas = false;
    this.mostrarComponentes = false;
    this.mostrarEventos = false;
    this.mostrarEnrutamiento = true;
    this.mostrarAccesoDatos = false;
  }
  fMostrarAccesoDatos(){
    this.mostrarFormularios = false;
    this.mostrarTitulo = false;
    this.mostrarDirectivas = false;
    this.mostrarComponentes = false;
    this.mostrarEventos = false;
    this.mostrarEnrutamiento = false;
    this.mostrarAccesoDatos = true;
  }


}

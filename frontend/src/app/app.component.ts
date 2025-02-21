import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-root',
  //Hay que importar CommonModule y FormsModule para poder inyectar las directivas
  imports: [CommonModule, FormsModule, RouterOutlet, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})

export class AppComponent {
  title = 'ProyectoAngular';


  /* VARIABLES Y MÉTODOS DE MENÚ INICIAL CON DIRECTIVA NGIF" 

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

  */

}

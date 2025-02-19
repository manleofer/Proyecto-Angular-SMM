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


@Component({
  selector: 'app-root',
  //Hay que importar CommonModule y FormsModule para poder inyectar las directivas
  imports: [RouterOutlet, CommonModule, FormsModule, FooterComponent, TareasComponent, IconosComponent, EventosComponent, FormularioComponent, EnrutamientoComponent, AccesoDatosComponent, FormulariosInsertComponent],
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

  colorEstado = {
    "color": "red",
    "background-color": "blue"
  };
  //Crear una variable y definir el color inicial del texto del párrafo
  colorTexto : string = 'black';

  //Objeto "registro" en JSON
  registro = {
    nombre: "",
    email: "",
    pwd: ""
  }


  //Variable para validar formulario y enviarlo
  formularioValido = false;
  formularioEnviado = false;



  //Crear un método para cambiar el color del texto al pulsar los botones
  cambiarColorTexto(nuevoColor: string) {
    this.colorTexto = nuevoColor;
  }

  //Crear una variable booleana inicializada el false para que la clase del párrafo sea la clase por defecto
  parrafoResaltado : boolean = false;

  //Crear métodos para cambiar de clase al párrafo
  cambiarAParrafoResaltado() {
    this.parrafoResaltado = true;
  }

  cambiarAParrafoPorDefecto() {
    this.parrafoResaltado = false;
  }

  //Método para validar campos del formulario
  validarFormulario() {
    this.formularioEnviado = true;
    if (this.registro.nombre.length > 0 &&
      this.registro.email.length >0 &&
      this.registro.email.includes('@') &&
      this.registro.pwd.length > 6
    ) {
      this.formularioValido = true;
    }
  }
}

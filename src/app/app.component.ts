import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TareasComponent } from "./tareas/tareas.component";

@Component({
  selector: 'app-root',
  //Hay que importar CommonModule y FormsModule para poder inyectar las directivas
  imports: [RouterOutlet, CommonModule, FormsModule, TareasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})

export class AppComponent {
  title = 'ProyectoAngular';

  //Creamos una variable booleana iniciada en false y la cambiamos al hacer click
  mostrarMenu: boolean = false;
  fMostrarMenu() {
    this.mostrarMenu = !this.mostrarMenu;
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

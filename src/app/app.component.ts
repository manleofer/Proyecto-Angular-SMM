import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
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
}

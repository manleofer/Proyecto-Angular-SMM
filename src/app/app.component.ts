import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'ProyectoAngular';


  //Crear una variable y definir el color inicial del texto del párrafo
  colorTexto : string = 'black';

  //Array (de tipo string) donde se almacenan las tareas
  tareas: string[] = [];

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


  //Método para agregar una tarea al string de tareas
  agregarTarea() {
    const inputTarea = <HTMLInputElement>document.getElementById("inputTarea");
    // <HTMLInputElement> Es una aserción de tipo propia de TypeScript, que indica el tipo de elemento HTML que se maneja
    const nuevaTarea = inputTarea.value;

    this.tareas.push(nuevaTarea);
    inputTarea.value = ""   //Para resetear el valor del input después de agregar cada tarea


  }


}



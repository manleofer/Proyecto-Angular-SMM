import { Component } from '@angular/core';

@Component({
  selector: 'app-tareas',
  imports: [],
  templateUrl: './tareas.component.html',
  styleUrl: './tareas.component.css'
})

export class TareasComponent {
  //Array (de tipo string) donde se almacenan las tareas
  tareas: string[] = [];

   //Método para agregar una tarea al string de tareas
   agregarTarea() {
    const inputTarea = <HTMLInputElement>document.getElementById("inputTarea");
    // <HTMLInputElement> Es una aserción de tipo propia de TypeScript, que indica el tipo de elemento HTML que se maneja
    const nuevaTarea = inputTarea.value;
    this.tareas.push(nuevaTarea);
    inputTarea.value = ""   //Para resetear el valor del input después de agregar cada tarea
  }


}

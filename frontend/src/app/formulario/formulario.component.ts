import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  imports: [CommonModule, FormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {

  //Objeto registro en JSON
  registro = {
    nombre: "",
    apellido: "",
    fechaNacimiento: "",
    username: "",
    pwd: "",
    email: ""
  };

  mostrarMensajeReset() {
    alert("El formulario se ha restablecido.");
  }
}

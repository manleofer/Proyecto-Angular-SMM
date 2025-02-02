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
    pwd: ""
  };

  //Variable usada para validar contraseña inicializada en false
  esValida = false;

  /*   //Variable que valida el formulario
    formularioValido = false;
    formularioEnviado = false; */

  //Método para validar la contraseña
//Tiene que tener longitud 8 y estar formada por letras y dígitos
  validarPwd(): void {
    const pwd = this.registro.pwd;
    const longitud = pwd.length >= 8;
    const letra = /[a-zA-Z]/.test(pwd);
    const digito = /\d/.test(pwd);

    this.esValida = longitud && letra && digito;
  }

}

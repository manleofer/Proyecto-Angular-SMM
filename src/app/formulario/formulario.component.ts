import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {

  forma! : FormGroup;
  constructor(private fb:FormBuilder){
    this.crearFormulario();
  }

  crearFormulario() {
    this.forma = this.fb.group({

      email:['',[Validators.required,Validators.pattern('[a-z0-9._%+-]+@[a-z09.-]+\.[a-z]{2,3}$')]]
    })
  }

  guardar(){
    console.log('Formulario guardado:', this.forma.value);
  }

  limpiarFormulario(){
    this.forma.reset();
  }

}


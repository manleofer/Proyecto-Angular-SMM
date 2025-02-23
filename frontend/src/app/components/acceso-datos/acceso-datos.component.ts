import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormulariosInsertComponent } from '../formularios-insert/formularios-insert.component';
import { ConsultasComponent } from '../consultas/consultas.component';
import { FormulariosDeleteComponent } from "../formularios-delete/formularios-delete.component";
import { FormulariosUpdateComponent } from "../formularios-update/formularios-update.component";

@Component({
  selector: 'app-acceso-datos',
  imports: [CommonModule, FormulariosInsertComponent, ConsultasComponent, FormulariosUpdateComponent, FormulariosDeleteComponent],
  templateUrl: './acceso-datos.component.html',
  styleUrl: './acceso-datos.component.css'
})

export class AccesoDatosComponent {

  // Variable que cambia si se realiza alguna operación CRUD y que está ligada a la actualización de las tablas de consultas
  actualizarDatos: boolean = false;
  
   

  //Método que se ejecuta cuando se realiza alguna operación CRUD
  actualizarConsultas() {
    this.actualizarDatos = !this.actualizarDatos; 
  }

}

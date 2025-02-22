import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormulariosInsertComponent } from '../formularios-insert/formularios-insert.component';
import { FormulariosDeleteComponent } from "../formularios-delete/formularios-delete.component";

@Component({
  selector: 'app-acceso-datos',
  imports: [CommonModule, FormulariosInsertComponent, FormulariosDeleteComponent],
  templateUrl: './acceso-datos.component.html',
  styleUrl: './acceso-datos.component.css'
})
export class AccesoDatosComponent {

}

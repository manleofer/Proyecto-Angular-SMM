import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormulariosInsertComponent } from '../formularios-insert/formularios-insert.component';
import { ConsultasComponent } from '../consultas/consultas.component';

@Component({
  selector: 'app-acceso-datos',
  imports: [CommonModule, FormulariosInsertComponent, ConsultasComponent],
  templateUrl: './acceso-datos.component.html',
  styleUrl: './acceso-datos.component.css'
})
export class AccesoDatosComponent {

}

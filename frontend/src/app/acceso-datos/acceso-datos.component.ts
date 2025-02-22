import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormulariosInsertComponent } from '../formularios-insert/formularios-insert.component';

@Component({
  selector: 'app-acceso-datos',
  imports: [CommonModule, FormulariosInsertComponent],
  templateUrl: './acceso-datos.component.html',
  styleUrl: './acceso-datos.component.css'
})
export class AccesoDatosComponent {

}

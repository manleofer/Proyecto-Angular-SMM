import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-iconos',
  imports: [CommonModule,],
  templateUrl: './iconos.component.html',
  styleUrl: './iconos.component.css'
})
export class IconosComponent {
  // Aquí gestionamos los enlaces y le asignamos un nombre para llamarlo en el html de iconos.
  institutoUrl: string = 'https://www.iesalmudeyne.es/'; 
  gitHubManUrl: string = 'https://github.com/manleofer';
  gitHubSanUrl: string = 'https://github.com/Samohe89';
  gitHubMarUrl: string = 'https://github.com/macruisan';
  
}

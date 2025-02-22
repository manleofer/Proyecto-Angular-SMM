import { Component } from '@angular/core';
import { TareasComponent } from '../tareas/tareas.component';
import { IconosComponent } from '../iconos/iconos.component';

@Component({
  selector: 'app-componentes',
  imports: [TareasComponent,IconosComponent],
  templateUrl: './componentes.component.html',
  styleUrl: './componentes.component.css'
})
export class ComponentesComponent {

}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-eventos',
  imports: [CommonModule],
  templateUrl: './eventos.component.html',
  styleUrl: './eventos.component.css'
})
export class EventosComponent {

  claseBotonBS = "btn-primary";

  cambiaClaseBotonBS() {
    if (this.claseBotonBS === 'btn-primary') {
      this.claseBotonBS = 'btn-secondary';
    } else if (this.claseBotonBS === 'btn-secondary') {
      this.claseBotonBS = 'btn-success';
    } else if (this.claseBotonBS === 'btn-success') {
      this.claseBotonBS = 'btn-danger';
    } else {
      this.claseBotonBS = 'btn-primary';
    }
  }

}

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
  mensajeReproducido = "";

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

  cambiaColorRecuadro(event: Event) {
    const recuadroActivo = event.target as HTMLElement;
    recuadroActivo.style.backgroundColor = "darkred";
  }

  devuelveColorRecuadro(event: Event) {
    const recuadroInactivo = event.target as HTMLElement;
    recuadroInactivo.style.backgroundColor = "darkgreen";
  }

  muestraMensaje() {
    alert("¡Has hecho click derecho!");
  }

  reproduceMensaje(event: KeyboardEvent) {
    const areaTexto = event.target as HTMLTextAreaElement;
    this.mensajeReproducido = areaTexto.value + event.key;
  }

}






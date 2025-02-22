// Fichero en el que se definen rutas, apuntando a componentes existentes
import { Routes } from '@angular/router';
import { DirectivasComponent } from './components/directivas/directivas.component';
import { ComponentesComponent } from './components/componentes/componentes.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { EnrutamientoComponent } from './components/enrutamiento/enrutamiento.component';
import { AccesoDatosComponent } from './components/acceso-datos/acceso-datos.component';
import { TituloComponent } from './components/titulo/titulo.component';

// Las rutas se almacenan en un array de tipo Routes
export const rutas: Routes = [
    {path: "", redirectTo: "", pathMatch: "full"},   //Ruta por defecto, vacía
    {path: "", component: TituloComponent},
    {path: "directivas", component: DirectivasComponent},
    {path: "componentes", component: ComponentesComponent},
    {path: "eventos", component: EventosComponent},
    {path: "formularios", component: FormularioComponent},
    {path: "enrutamiento", component: EnrutamientoComponent},
    {path: "accesoDatos", component: AccesoDatosComponent},
    {path: "**", redirectTo: ""}  //En caso de ruta errónea
];

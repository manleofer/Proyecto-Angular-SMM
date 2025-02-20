// Fichero en el que se definen rutas, apuntando a componentes existentes
import { Routes } from '@angular/router';
import { DirectivasComponent } from './directivas/directivas.component';
import { ComponentesComponent } from './componentes/componentes.component';
import { FormularioComponent } from './formulario/formulario.component';
import { EventosComponent } from './eventos/eventos.component';
import { EnrutamientoComponent } from './enrutamiento/enrutamiento.component';
import { AccesoDatosComponent } from './acceso-datos/acceso-datos.component';
import { TituloComponent } from './titulo/titulo.component';

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

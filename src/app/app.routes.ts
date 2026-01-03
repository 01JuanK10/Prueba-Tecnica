import { Routes } from '@angular/router';
import { VistaPrincipal } from './components/vista-principal/vista-principal';
import { DetallesPodcast } from './components/detalles-podcast/detalles-podcast';
export const routes: Routes = [
    {
        path: '', component: VistaPrincipal
    },
    {
        path: 'podcast', component: DetallesPodcast
    }
];

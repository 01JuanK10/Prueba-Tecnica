import { Routes } from '@angular/router';
import { VistaPrincipal } from './components/vista-principal/vista-principal';
import { DetallesPodcast } from './components/detalles-podcast/detalles-podcast';
import { DetallesCapitulo } from './components/detalles-capitulo/detalles-capitulo';
import { detallesPodcastResolver } from './components/detalles-podcast/detalles-podcast-resolver';
export const routes: Routes = [
    {
        path: '', component: VistaPrincipal
    },
    {
        path: 'podcast/:podcastId', component: DetallesPodcast,
        resolve: {
            podcastInfo: detallesPodcastResolver
        },
        children: [
            { 
                path: 'episode/:episodeId', component: DetallesCapitulo
            }
        ]
    }
];

import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { ServicioHttp } from '../../services/servicio-http';
import { Episodio, Podcast } from '../../domain/Podcast';
import { forkJoin, map } from 'rxjs';

export const detallesPodcastResolver: ResolveFn<{podcast: Podcast, cantidadEpisodios: number, episodios: Episodio[]}> = (
  route,
  state) => {
  
  const podcastId = route.paramMap.get('podcastId');
  const http = inject(ServicioHttp);
  
  return forkJoin({
    detalles: http.obtenerDetallesPodcast(podcastId!),
    lista: http.obtenerListaEpisodios(podcastId!)
  }).pipe(
    map(({ detalles, lista }) => {
      
      const podcast: Podcast = {
        id: detalles.results[0].trackId.toString(),
        urlImagen: detalles.results[0].artworkUrl600,
        titulo: detalles.results[0].trackName,
        autor: detalles.results[0].artistName,
        descripcion: detalles.results[0].description,
      };

      const cantidadEpisodios = lista.resultCount - 1;
      const episodios: Episodio[] = lista.results.slice(1).map((elemento: any) => ({
        id: elemento.trackId.toString(),
        titulo: elemento.trackName,
        duracion: elemento.trackTimeMillis ? Math.floor(elemento.trackTimeMillis / 60000) + ' min' : 'Desconocida',
        fechaPublicacion: elemento.releaseDate,
        descripcion: elemento.description,
        urlAudio: elemento.previewUrl,
      }));

      return {podcast, cantidadEpisodios, episodios};
    })
  );
};

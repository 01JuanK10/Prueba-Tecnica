import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { itunesResponse } from '../domain/ItunesResponse';
import { itunesPodcastResponse } from '../domain/itunesPodcastResponse';
import { Podcast } from '../domain/Podcast';


const URL_PODCASTS = 'https://itunes.apple.com/us/rss/toppodcasts/limit=10/genre=1310/json';
const URL_DETALLES_PODCAST = 'https://itunes.apple.com/lookup?id=';

@Injectable({
  providedIn: 'root',
})

export class ServicioHttp {

  http = inject(HttpClient);

  obtenerListaPodcasts() {
    return this.http.get<itunesResponse>(URL_PODCASTS);
  }

  obtenerDetallesPodcast(podcastId: string){
    return this.http.get<itunesPodcastResponse>(URL_DETALLES_PODCAST + podcastId);
  }

  obtenerListaEpisodios(podcastId: string){
    return this.http.get<itunesPodcastResponse>(URL_DETALLES_PODCAST + podcastId + '&entity=podcastEpisode');
  }
}

import { Component, inject, OnInit } from '@angular/core';
import { ServicioHttp } from '../../services/servicio-http';
import { Episodio, Podcast } from '../../domain/Podcast';
import { RouterOutlet } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-detalles-podcast',
  imports: [RouterOutlet, DatePipe],
  templateUrl: './detalles-podcast.html',
  styleUrl: './detalles-podcast.css',
})
export class DetallesPodcast implements OnInit {

  http = inject(ServicioHttp);

  podcast!: Podcast;
  cantidadEpisodios: number = 0;
  episodios: Episodio[] = [];
  constructor(){
    this.podcast = {
      id: '',
      urlImagen: '',
      titulo: '',
      autor: '',
      descripcion: '',
    };
  }

  ngOnInit(): void {
    this.http.obtenerDetallesPodcast('1535809341').subscribe((data) => {
      console.log(data);
      this.podcast = {
        id: data.results[0].trackId.toString(),
        urlImagen: data.results[0].artworkUrl600,
        titulo: data.results[0].trackName,
        autor: data.results[0].artistName,
        descripcion: data.results[0].description,
      };

      console.log(this.podcast)
    });

    this.http.obtenerListaEpisodios('1535809341').subscribe((data) => {
      console.log(data);
      this.cantidadEpisodios = data.resultCount - 1;
      this.episodios = data.results.slice(1).map((elemento) =>{
        return {
          id: elemento.trackId.toString(),
          titulo: elemento.trackName,
          duracion: elemento.trackTimeMillis ? Math.floor(elemento.trackTimeMillis / 60000) + ' min' : 'Desconocida',
          fechaPublicacion: elemento.releaseDate,
          descripcion: elemento.description,
          urlAudio: elemento.previewUrl,
        }
      });
      console.log(this.cantidadEpisodios);
      console.log(this.episodios);
    });
  }
}

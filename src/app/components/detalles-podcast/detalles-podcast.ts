import { Component, inject, OnInit } from '@angular/core';
import { ServicioHttp } from '../../services/servicio-http';
import { Podcast } from '../../domain/Podcast';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-detalles-podcast',
  imports: [RouterOutlet],
  templateUrl: './detalles-podcast.html',
  styleUrl: './detalles-podcast.css',
})
export class DetallesPodcast implements OnInit {

  http = inject(ServicioHttp);

  podcast!: Podcast;
  cantidadEpisodios: number = 0;
  episodios: any[] = [];
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
      this.cantidadEpisodios = data.resultCount - 1; // Resto 1 porque el primer resultado es el podcast en sí
      console.log('Cantidad de episodios: ' + this.cantidadEpisodios);
    });
  }
}

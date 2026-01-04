import { Component, inject, OnInit, Signal } from '@angular/core';
import { ServicioHttp } from '../../services/servicio-http';
import { Episodio, Podcast } from '../../domain/Podcast';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { DatePipe } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-detalles-podcast',
  imports: [RouterOutlet, DatePipe],
  templateUrl: './detalles-podcast.html',
  styleUrl: './detalles-podcast.css',
})
export class DetallesPodcast implements OnInit {

  private route = inject(ActivatedRoute)
  private data = toSignal(this.route.data)
  podcast!: Podcast;
  cantidadEpisodios: number = 0;
  episodios: Episodio[] = [];

  ngOnInit(): void {
    console.log(this.route.data)
    let data = this.data()!;
    data as { podcastInfo: {podcast: Podcast, cantidadEpisodios: number, episodios: Episodio[] } };
    console.log(data)
    if(data && data['podcastInfo']){
      this.podcast = data['podcastInfo']['podcast'];
      this.cantidadEpisodios = data['podcastInfo']['cantidadEpisodios'];
      this.episodios = data['podcastInfo']['episodios'];
    }

  }
}

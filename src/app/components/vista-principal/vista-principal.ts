import { Component, inject, OnInit } from '@angular/core';
import { ServicioHttp } from '../../services/servicio-http';
import { Podcast } from '../../domain/Podcast';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vista-principal',
  imports: [],
  templateUrl: './vista-principal.html',
  styleUrl: './vista-principal.css',
})

export class VistaPrincipal implements OnInit{
  http = inject(ServicioHttp);
  PodcastList: Podcast[] = [];

  router = inject(Router);

  ngOnInit(): void {
    this.http.obtenerListaPodcasts().subscribe({
      next: (data) => {
        console.log('Lista de podcasts obtenida');
        console.log(data);

        data['feed']['entry'].forEach((item: any) => {
          const podcast: Podcast = {
            id: item['id']['attributes']['im:id'],
            urlImagen: item['im:image'][2]['label'],
            titulo: item['im:name']['label'],
            autor: item['im:artist']['label'],
            descripcion: item['summary']['label'],
          };
          this.PodcastList.push(podcast);
        });
        console.log(this.PodcastList);
      },
      error: (error) => {
        console.error('Error al obtener la lista de podcasts:', error);
      }
    });
  }

  OnClickPodcast(podcastId: string){
    console.log('Podcast seleccionado con ID:', podcastId);
    this.router.navigate([`/podcast/${podcastId}`]); 
  }
}

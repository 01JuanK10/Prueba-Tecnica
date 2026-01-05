import { Component, inject, OnInit, signal } from '@angular/core';
import { ServicioHttp } from '../../services/servicio-http';
import { Podcast } from '../../domain/Podcast';
import { Router } from '@angular/router';
import { Sign } from 'crypto';

@Component({
  selector: 'app-vista-principal',
  imports: [],
  templateUrl: './vista-principal.html',
  styleUrl: './vista-principal.css',
})

export class VistaPrincipal implements OnInit{
  http = inject(ServicioHttp);
  podcastList = signal<Podcast[]>([]);
  podcastsIniciales: Podcast[] = [];
  router = inject(Router);
  cantidadLista = signal<number>(0)

  ngOnInit(): void {
    console.log('Componente VistaPrincipal inicializado');
    this.http.obtenerListaPodcasts().subscribe({
      next: (data) => {
        let podcastList: Podcast[] = [];
        data['feed']['entry'].forEach((item: any) => {
          const podcast: Podcast = {
            id: item['id']['attributes']['im:id'],
            urlImagen: item['im:image'][2]['label'],
            titulo: item['im:name']['label'],
            autor: item['im:artist']['label'],
            descripcion: item['summary']['label'],
          };
          podcastList.push(podcast);
        });
        this.podcastsIniciales = podcastList
        this.podcastList.set(podcastList);
        this.cantidadLista.set(podcastList.length)
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

  filtrarPodcasts(filtro: string){
    
    if(filtro.length !== 0){
      filtro = filtro.toLowerCase();
      let listaFiltrada = (this.podcastsIniciales.filter((podcast) => 
          podcast.autor.toLowerCase().includes(filtro) || podcast.titulo.toLowerCase().includes(filtro))
        );
      this.podcastList.set(listaFiltrada)
      this.cantidadLista.set(listaFiltrada.length);
    }else{
      this.podcastList.set(this.podcastsIniciales);
      this.cantidadLista.set(this.podcastsIniciales.length)
    }

  }
}

export interface Podcast {
    id: string;
    urlImagen: string;
    titulo: string;
    autor: string;
    descripcion: string;
    episodios?: [];
}

export interface Episodio {
    id: string;
    titulo: string;
    duracion: string;
    fechaPublicacion: string;
    descripcion: string;
    urlAudio: string;
}
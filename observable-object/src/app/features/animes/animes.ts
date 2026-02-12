import { Component, inject } from '@angular/core';
import { AnimeApi } from './services/anime-api';

@Component({
  selector: 'app-animes',
  standalone: true,
  imports: [],
  templateUrl: './animes.html',
  styleUrl: './animes.css',
})
export class Animes {
  protected readonly animesApi: AnimeApi = inject(AnimeApi);

  protected deleteAnimeById(idAnime: number) {
    if(!confirm(`¿Seguro que quieres eliminar el anime?`)) return;
this.animesApi.deleteAnimeById(idAnime).subscribe({
  next: () => {
    this.animesApi.getAllAnimes.reload();
    console.log(`Anime con id ${idAnime} eliminado correctamente`);
},
  error: (error) => {
  console.error(`Error al eliminar el anime con id ${idAnime}:`, error);
} 
}); 
}

protected updateAnimeById(idAnime: number) {
  let newEpisodes = prompt(`Introduce el nuevo número de episodios para el anime con id ${idAnime}:`);
  if (newEpisodes === null) return; // El usuario canceló el prompt
  const episodesNumber = parseInt(newEpisodes, 10);
  if (isNaN(episodesNumber)) {
  alert('Por favor, introduce un número válido de episodios.');
  return;
}
  this.animesApi.updateAnimeById(idAnime, episodesNumber).subscribe({
    next: () => {
  this.animesApi.getAllAnimes.reload();
  console.log(`Anime con id ${idAnime} actualizado correctamente`);
  },
  error: (error) => {
  console.error(`Error al actualizar el anime con id ${idAnime}:`, error);
  },
  });
}
}

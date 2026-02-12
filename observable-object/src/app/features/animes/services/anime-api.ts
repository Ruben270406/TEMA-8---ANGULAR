import { inject, Injectable } from '@angular/core';
import { Anime } from '../models/anime';
import { HttpClient, httpResource } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AnimeApi {
  protected url: string = 'http://localhost:3000/animes';

public readonly getAllAnimes = httpResource<Anime[]>(() => ({ url: this.url
}));

  private http: HttpClient = inject(HttpClient);
  public readonly deleteAnimeById = (idAnime: number): Observable<void> => {
    return this.http.delete<void>(`${this.url}/${idAnime}`);
  }

  public readonly updateAnimeById = (idAnime: number, newEpisodes: number): Observable<Anime> => {
  return this.http.patch<Anime>(`${this.url}/${idAnime}`, {episodes: newEpisodes}); 
  }
}

import { Injectable } from '@angular/core';
import { Anime } from '../models/anime';
import { httpResource } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AnimeApi {
  protected url: string = 'http://localhost:3000/animes';

public readonly getAllAnimes = httpResource<Anime[]>(() => ({ url: this.url
}));


}

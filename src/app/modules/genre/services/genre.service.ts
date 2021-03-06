import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {IGenres} from "../models";
import {urls} from "../../../constants";

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  constructor(private httpClient: HttpClient) {
  }

  getGenre(): Observable<IGenres> {
    return this.httpClient.get<IGenres>(urls.genre);
  }
}

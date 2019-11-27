import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pelicula } from '../interfaces/interfaces';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  constructor(private http: HttpClient) { }

  getAllMovies() {
    const date = moment().format('YYYY-MM-DD');
    return this.http.get<Pelicula>(`http://localhost:7070/cartelera/2019-10-15/${date}`);
  }


  getCartelera() {
    return this.http.get<Pelicula>(`http://localhost:7070/cartelera`);
  }

  getOMovie(id: string) {
    return this.http.get<Pelicula>(`http://localhost:7070/cartelera/${id}`);
  }

  sendData(movie) {
    return this.http.post(`http://localhost:7070/cartelera/pelicula`, movie);
  }
}

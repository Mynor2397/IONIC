import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Pelicula } from '../interfaces/interfaces';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  peliculas: Pelicula;
  cartelera: Pelicula;

  constructor(private movieService: MoviesService) { }
  ngOnInit() {
    this.movieService.getAllMovies().subscribe(resp => {
      this.peliculas = resp;
      console.log('Resp: ', this.peliculas);
    });

    this.movieService.getCartelera().subscribe(resp => {
      this.cartelera = resp;
      console.log('Cartelera: ', this.cartelera);
    });
  }
  
}

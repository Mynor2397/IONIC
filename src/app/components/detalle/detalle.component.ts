import { Component, OnInit, Input } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Pelicula } from '../../interfaces/interfaces';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
})
export class DetalleComponent implements OnInit {

  oculto = 150;

  @Input() id;
  pelicula: Pelicula = {}
  constructor(private MovieService: MoviesService, private modalCtrl: ModalController) { }

  ngOnInit() {
    // console.log(this.id);
    this.MovieService.getOMovie(this.id)
      .subscribe(resp => {
        this.pelicula = resp[0];
      });

  }

  regresar() {
    this.modalCtrl.dismiss();
  }

  favoritos() {
    console.log('hola');
  }
}

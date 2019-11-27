import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Pelicula } from '../interfaces/interfaces';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {



  pelicula: Pelicula;

  constructor(public alertCtrl: AlertController, private MovieService: MoviesService) { }

  ngOnInit() {
  }
  async sendData() {
    const alert = await this.alertCtrl.create({
      header: 'Ingrese la pelicula!',
      inputs: [
        {
          name: 'id',
          type: 'text',
          placeholder: 'ID'
        },
        {
          name: 'title',
          type: 'text',
          placeholder: 'Titulo'
        },
        {
          name: 'year',
          type: 'text',
          placeholder: 'Año'
        }, {
          name: 'type',
          type: 'text',
          placeholder: 'Tipo'
        },
        {
          name: 'poster',
          type: 'text',
          placeholder: 'Poster'
        }, {
          name: 'description',
          type: 'text',
          placeholder: 'Descripcion'
        },
        {
          name: 'ubication',
          type: 'text',
          placeholder: 'Ubicacion'
        },
        {
          name: 'status',
          type: 'text',
          placeholder: 'Estado'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (data) => {
            this.MovieService.sendData(data).subscribe(resp => {
              console.log(resp);
            });
          }
        }
      ]
    });

    await alert.present();
  }

}

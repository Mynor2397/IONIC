import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { SlideshowBackdropComponent } from './slideshow-backdrop/slideshow-backdrop.component';
import { SlideshowParesComponent } from './slideshow-pares/slideshow-pares.component';
import { PipesModule } from '../pipes/pipes.module';
import { DetalleComponent } from './detalle/detalle.component';

@NgModule({
  entryComponents:[
    DetalleComponent
  ],
  declarations: [
    SlideshowBackdropComponent,
    SlideshowParesComponent,
    DetalleComponent
  ],
  exports: [
    SlideshowBackdropComponent,
    SlideshowParesComponent,
    DetalleComponent

  ],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule
  ]
})
export class ComponentsModule { }

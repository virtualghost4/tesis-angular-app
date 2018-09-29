import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicioRoutingModule } from './servicio-routing.module';
import { ServicioHomeComponent } from './servicio-home/servicio-home.component';
import {PagosModule} from './pagos/pagos.module';
import {AgmCoreModule} from '@agm/core';
import {AgmSnazzyInfoWindowModule} from '@agm/snazzy-info-window';
import {MapsComponent} from './maps.component';

@NgModule({
  imports: [
    CommonModule,
    PagosModule,
    ServicioRoutingModule,
    CommonModule,
    AgmCoreModule,
    AgmSnazzyInfoWindowModule,
  ],
  declarations: [
    ServicioHomeComponent,
    MapsComponent
  ]
})
export class ServicioModule { }

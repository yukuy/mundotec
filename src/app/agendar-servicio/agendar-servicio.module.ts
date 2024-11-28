import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgendarServicioPageRoutingModule } from './agendar-servicio-routing.module';

import { AgendarServicioPage } from './agendar-servicio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgendarServicioPageRoutingModule
  ],
  declarations: [AgendarServicioPage]
})
export class AgendarServicioPageModule {}

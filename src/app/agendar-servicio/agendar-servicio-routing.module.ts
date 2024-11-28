import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgendarServicioPage } from './agendar-servicio.page';

const routes: Routes = [
  {
    path: '',
    component: AgendarServicioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgendarServicioPageRoutingModule {}

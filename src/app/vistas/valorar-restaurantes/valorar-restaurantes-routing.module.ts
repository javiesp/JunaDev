import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ValorarRestaurantesPage } from './valorar-restaurantes.page';

const routes: Routes = [
  {
    path: '',
    component: ValorarRestaurantesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ValorarRestaurantesPageRoutingModule {}

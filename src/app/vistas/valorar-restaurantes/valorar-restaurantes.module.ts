import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ValorarRestaurantesPageRoutingModule } from './valorar-restaurantes-routing.module';

import { ValorarRestaurantesPage } from './valorar-restaurantes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ValorarRestaurantesPageRoutingModule
  ],
  declarations: [ValorarRestaurantesPage]
})
export class ValorarRestaurantesPageModule {}

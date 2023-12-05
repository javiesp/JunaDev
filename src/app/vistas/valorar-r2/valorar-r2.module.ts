import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ValorarR2PageRoutingModule } from './valorar-r2-routing.module';

import { ValorarR2Page } from './valorar-r2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ValorarR2PageRoutingModule
  ],
  declarations: [ValorarR2Page]
})
export class ValorarR2PageModule {}

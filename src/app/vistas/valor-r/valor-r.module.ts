import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ValorRPageRoutingModule } from './valor-r-routing.module';

import { ValorRPage } from './valor-r.page';
import { ValorRrComponent } from '../valor-rr/valor-rr.component';
import { DateAgoPipe } from '../pipes/date-ago.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ValorRPageRoutingModule
  ],
  declarations: [ValorRPage,
                ValorRrComponent,
                DateAgoPipe]
})
export class ValorRPageModule {}

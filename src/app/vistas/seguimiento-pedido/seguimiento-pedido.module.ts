import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeguimientoPedidoPageRoutingModule } from './seguimiento-pedido-routing.module';

import { SeguimientoPedidoPage } from './seguimiento-pedido.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeguimientoPedidoPageRoutingModule
  ],
  declarations: [SeguimientoPedidoPage]
})
export class SeguimientoPedidoPageModule {}

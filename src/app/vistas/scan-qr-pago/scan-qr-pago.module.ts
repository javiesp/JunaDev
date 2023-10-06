import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScanQrPagoPageRoutingModule } from './scan-qr-pago-routing.module';

import { ScanQrPagoPage } from './scan-qr-pago.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScanQrPagoPageRoutingModule
  ],
  declarations: [ScanQrPagoPage]
})
export class ScanQrPagoPageModule {}

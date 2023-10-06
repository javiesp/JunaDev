import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScanQrPagoPage } from './scan-qr-pago.page';

const routes: Routes = [
  {
    path: '',
    component: ScanQrPagoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScanQrPagoPageRoutingModule {}

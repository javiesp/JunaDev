import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeguimientoPedidoPage } from './seguimiento-pedido.page';

const routes: Routes = [
  {
    path: '',
    component: SeguimientoPedidoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeguimientoPedidoPageRoutingModule {}

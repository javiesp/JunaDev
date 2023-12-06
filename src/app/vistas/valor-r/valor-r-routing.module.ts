import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ValorRPage } from './valor-r.page';

const routes: Routes = [
  {
    path: '',
    component: ValorRPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ValorRPageRoutingModule {}

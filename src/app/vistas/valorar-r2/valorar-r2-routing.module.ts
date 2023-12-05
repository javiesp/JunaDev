import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ValorarR2Page } from './valorar-r2.page';

const routes: Routes = [
  {
    path: '',
    component: ValorarR2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ValorarR2PageRoutingModule {}

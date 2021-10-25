import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CachupinPage } from './cachupin.page';

const routes: Routes = [
  {
    path: '',
    component: CachupinPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CachupinPageRoutingModule {}

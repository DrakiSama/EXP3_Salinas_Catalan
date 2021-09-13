import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactanosPage } from './contactanos.page';

const routes: Routes = [
  {
    path: '',
    component: ContactanosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactanosPageRoutingModule {}

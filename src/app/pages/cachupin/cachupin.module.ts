import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CachupinPageRoutingModule } from './cachupin-routing.module';

import { CachupinPage } from './cachupin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CachupinPageRoutingModule
  ],
  declarations: [CachupinPage]
})
export class CachupinPageModule {}

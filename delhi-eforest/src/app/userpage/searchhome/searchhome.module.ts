import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchhomePageRoutingModule } from './searchhome-routing.module';

import { SearchhomePage } from './searchhome.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchhomePageRoutingModule
  ],
  declarations: [SearchhomePage]
})
export class SearchhomePageModule {}

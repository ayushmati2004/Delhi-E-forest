import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccountpagePageRoutingModule } from './accountpage-routing.module';

import { AccountpagePage } from './accountpage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccountpagePageRoutingModule
  ],
  declarations: [AccountpagePage]
})
export class AccountpagePageModule {}

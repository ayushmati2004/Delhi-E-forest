import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountpagePage } from './accountpage.page';

const routes: Routes = [
  {
    path: '',
    component: AccountpagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountpagePageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchhomePage } from './searchhome.page';

const routes: Routes = [
  {
    path: '',
    component: SearchhomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchhomePageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserpagePage } from './userpage.page';

const routes: Routes = [
  {
    path: '',
    component: UserpagePage,
    children:[
      {
        path: 'userhome',
        loadChildren: () => import('./userhome/userhome.module').then( m => m.UserhomePageModule)
      },
      {
        path: 'searchhome',
        loadChildren: () => import('./searchhome/searchhome.module').then( m => m.SearchhomePageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserpagePageRoutingModule {}

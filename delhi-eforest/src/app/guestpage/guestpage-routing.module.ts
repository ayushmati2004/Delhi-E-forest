import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GuestpagePage } from './guestpage.page';

const routes: Routes = [
  {
    path: '',
    component: GuestpagePage,
    children:[
      {path: 'homepage',
      loadChildren: () => import('./homepage/homepage.module').then( m => m.HomepagePageModule)
    },
    {
      path: 'searchpage',
      loadChildren: () => import('./searchpage/searchpage.module').then( m => m.SearchpagePageModule)
    },
    {
      path: 'accountpage',
      loadChildren: () => import('./accountpage/accountpage.module').then( m => m.AccountpagePageModule)
    },
    {
      path: '',
      redirectTo: '/guestpage/homepage',
      pathMatch: 'full'
    },
  ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GuestpagePageRoutingModule {}

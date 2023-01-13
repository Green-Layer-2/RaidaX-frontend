import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth.component';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./introduction/introduction.module').then(m => m.IntroductionModule)
      },
      {
        path: 'localwallet',
        loadChildren: () => import('./create-localwallet/create-localwallet.module').then(m => m.CreateLocalwalletModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }

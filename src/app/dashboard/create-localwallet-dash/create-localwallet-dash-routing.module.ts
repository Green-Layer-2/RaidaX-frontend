import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateLocalwalletDashComponent } from './create-localwallet-dash.component';

const routes: Routes = [
  {
    path: '',
    component: CreateLocalwalletDashComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./local-name/local-name.module').then(m => m.LocalNameModule)
      },
      {
        path: 'completed',
        loadChildren: () => import('./local-completed/local-completed.module').then(m => m.LocalCompletedModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateLocalwalletDashRoutingModule { }

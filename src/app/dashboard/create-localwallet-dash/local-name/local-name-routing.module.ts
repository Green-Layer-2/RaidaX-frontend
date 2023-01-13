import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LocalNameComponent } from './local-name.component';


const routes: Routes = [
  {
    path: '',
    component: LocalNameComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class   LocalNameRoutingModule { }

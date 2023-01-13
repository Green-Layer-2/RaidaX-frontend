import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateNameComponent } from './create-name.component';

const routes: Routes = [
  {
    path: '',
    component: CreateNameComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateNameRoutingModule { }

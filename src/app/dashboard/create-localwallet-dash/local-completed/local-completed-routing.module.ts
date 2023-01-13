import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LocalCompletedComponent } from './local-completed.component';


const routes: Routes = [
  {
    path: '',
    component: LocalCompletedComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class  LocalCompletedRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LocalStepCompleteComponent } from './local-step-complete.component';

const routes: Routes = [
  {
    path: '',
    component: LocalStepCompleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocalStepCompleteRoutingModule { }

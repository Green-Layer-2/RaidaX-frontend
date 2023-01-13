import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FixComponent } from './fix.component';

const routes: Routes = [
  {path: '', component: FixComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FixRoutingModule { }

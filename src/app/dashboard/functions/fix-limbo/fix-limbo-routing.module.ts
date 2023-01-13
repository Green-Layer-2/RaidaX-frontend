import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FixLimboComponent } from './fix-limbo.component';

const routes: Routes = [
  {
   path: '', 
   component: FixLimboComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FixLimboRoutingModule { }
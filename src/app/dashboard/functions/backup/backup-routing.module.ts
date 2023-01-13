import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BackupComponent } from './backup.component';

const routes: Routes = [
  {path: '', component: BackupComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackupRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FunctionsComponent } from './functions.component';

const routes: Routes = [
  {
    path: '',
    component: FunctionsComponent,
    children: [
      {
        path: 'fix',
        loadChildren: () => import('./fix/fix.module').then(m => m.FixModule)
      },
      {
        path: 'fix-limbo',
        loadChildren: () => import('./fix-limbo/fix-limbo.module').then(m => m.FixLimboModule)
      },
      {
        path: 'backup',
        loadChildren: () => import('./backup/backup.module').then(m => m.BackupModule)
      },
      {
        path: 'health_check',
        loadChildren: () => import('./health/health.module').then(m => m.HealthModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FunctionsRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TransactionsComponent } from './transactions.component';

const routes: Routes = [
  {
    path: '',
    component: TransactionsComponent,
    children: [
      {
        path: 'import',
        loadChildren: () => import('./upload/upload.module').then(m => m.UploadModule)
      },
      {
        path: 'export',
        loadChildren: () => import('./download/download.module').then(m => m.DownloadModule)
      },
      {
        path: 'transfer',
        loadChildren: () => import('./transfer/transfer.module').then(m => m.TransferModule)
      },
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransactionsRoutingModule { }

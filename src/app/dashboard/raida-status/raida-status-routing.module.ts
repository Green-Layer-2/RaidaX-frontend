import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RaidaStatusComponent } from './raida-status.component';

const routes: Routes = [
    {
        path: '',
        component: RaidaStatusComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RaidaStatusRoutingModule { }

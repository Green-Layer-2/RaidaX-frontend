import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocalCompletedComponent } from './local-completed.component';
import { LocalCompletedRoutingModule } from './local-completed-routing.module';


@NgModule({
  declarations: [LocalCompletedComponent],
  imports: [
    CommonModule,
    LocalCompletedRoutingModule
  ]
})
export class LocalCompletedModule { }

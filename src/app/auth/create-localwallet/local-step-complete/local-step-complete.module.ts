import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocalStepCompleteRoutingModule } from './local-step-complete-routing.module';
import { LocalStepCompleteComponent } from './local-step-complete.component';


@NgModule({
  declarations: [LocalStepCompleteComponent],
  imports: [
    CommonModule,
    LocalStepCompleteRoutingModule
  ]
})
export class LocalStepCompleteModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FixRoutingModule } from './fix-routing.module';
import { FixComponent } from './fix.component';
import { LottieModule } from 'ngx-lottie';
@NgModule({
  declarations: [FixComponent],
  imports: [
    CommonModule,
    FixRoutingModule,
    LottieModule
  ]
})
export class FixModule { }

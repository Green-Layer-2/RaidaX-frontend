import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FixLimboRoutingModule } from './fix-limbo-routing.module';
import { FixLimboComponent } from './fix-limbo.component';
import { LottieModule } from 'ngx-lottie';

@NgModule({
  declarations: [FixLimboComponent],
  imports: [
    CommonModule,
    FixLimboRoutingModule,
    LottieModule
  ]
})
export class FixLimboModule { }

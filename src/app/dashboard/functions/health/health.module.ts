import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HealthRoutingModule } from './health-routing.module';
import { HealthComponent } from './health.component';
import { LottieModule } from 'ngx-lottie';
@NgModule({
  declarations: [HealthComponent],
  imports: [
    CommonModule,
    HealthRoutingModule,
    LottieModule
  ]
})
export class HealthModule { }

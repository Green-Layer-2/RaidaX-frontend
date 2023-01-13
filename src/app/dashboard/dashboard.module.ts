import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { LeftPanelComponent } from './left-panel/left-panel.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LottieModule } from 'ngx-lottie';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
@NgModule({
  declarations: [DashboardComponent, LeftPanelComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    LottieModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DashboardModule { }

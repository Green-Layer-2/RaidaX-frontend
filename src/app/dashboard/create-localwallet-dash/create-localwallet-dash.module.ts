import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateLocalwalletDashComponent } from './create-localwallet-dash.component';
import { CreateLocalwalletDashRoutingModule } from './create-localwallet-dash-routing.module';


@NgModule({
  declarations: [CreateLocalwalletDashComponent],
  imports: [
    CommonModule,
    CreateLocalwalletDashRoutingModule
  ]
})
export class CreateLocalwalletDashModule { }
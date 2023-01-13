import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateLocalwalletRoutingModule } from './create-localwallet-routing.module';
import { CreateLocalwalletComponent } from './create-localwallet.component';


@NgModule({
  declarations: [CreateLocalwalletComponent],
  imports: [
    CommonModule,
    CreateLocalwalletRoutingModule
  ]
})
export class CreateLocalwalletModule { }

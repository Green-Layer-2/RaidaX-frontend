import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransferRoutingModule } from './transfer-routing.module';
import { TransferComponent } from './transfer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LottieModule } from 'ngx-lottie';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TooltipModule } from 'ng2-tooltip-directive';
import { ClickOutsideModule } from 'ng-click-outside';


@NgModule({
  declarations: [TransferComponent],
  imports: [
    CommonModule,
    TransferRoutingModule,
    FormsModule,
    LottieModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    FormsModule,
    TooltipModule,
    ClickOutsideModule
  ]
})
export class TransferModule { }

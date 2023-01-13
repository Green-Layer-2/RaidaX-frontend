import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RaidaStatusRoutingModule } from './raida-status-routing.module';
import { RaidaStatusComponent } from './raida-status.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { LottieModule } from 'ngx-lottie';
@NgModule({
    declarations: [RaidaStatusComponent],
    imports: [
        CommonModule,
        RaidaStatusRoutingModule,
        NgbModule,
        ReactiveFormsModule,
        FormsModule,
        LottieModule,
        MatSliderModule
    ]
})
export class Raida_StatusModule { }

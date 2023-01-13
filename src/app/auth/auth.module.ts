import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LottieModule } from 'ngx-lottie';
import { ClickOutsideModule } from 'ng-click-outside';
@NgModule({
  declarations: [AuthComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    NgbModule,
    FormsModule,
    FontAwesomeModule,
    LottieModule,
    ClickOutsideModule
  ],
  exports:[AuthComponent]
})
export class AuthModule { }
